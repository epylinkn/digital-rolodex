import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { setPropTypes, setDisplayName, withProps } from 'recompose'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import styles from './ContactPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedContactPage'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add props.match
  withRouter,
  // Set proptypes of props used in HOCs
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        contactId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  withProps(({ match: { params: { contactId } } }) => ({
    contactId
  })),
  // Create listeners based on current users UID
  firestoreConnect(({ contactId }) => [
    // Listener for projects the current user created
    {
      collection: 'contacts',
      doc: contactId
    }
  ]),
  // Map projects from state to props
  connect(({ firestore: { data } }, { contactId }) => ({
    contact: get(data, `contacts.${contactId}`)
  })),
  // Show loading spinner while project is loading
  spinnerWhileLoading(['contact']),
  // Add styles as props.classes
  withStyles(styles)
)
