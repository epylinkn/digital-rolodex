import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers, withStateHandlers, setDisplayName } from 'recompose'
import { withRouter } from 'react-router-dom'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import { CONTACTS_PATH } from 'constants/paths'
import styles from './ContactsPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedContactsPage'),
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Map auth uid from state to props
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Create listeners based on current users UID
  firestoreConnect(({ uid }) => [
    // Listener for projects the current user created
    {
      collection: 'contacts',
      where: ['createdBy', '==', uid]
    }
  ]),
  // Map projects from state to props
  connect(({ firestore: { ordered } }) => ({
    contacts: ordered.contacts
  })),
  // Show loading spinner while projects and collabProjects are loading
  spinnerWhileLoading(['contacts']),
  // Add props.router
  withRouter,
  // Add props.showError and props.showSuccess
  withNotifications,
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ initialDialogOpen = false }) => ({
      newDialogOpen: initialDialogOpen
    }),
    // Add state handlers as props
    {
      toggleDialog: ({ newDialogOpen }) => () => ({
        newDialogOpen: !newDialogOpen
      })
    }
  ),
  // Add handlers as props
  withHandlers({
    addContact: props => newInstance => {
      const { firestore, uid, showError, showSuccess, toggleDialog } = props
      if (!uid) {
        return showError('You must be logged in to create a contact')
      }
      return firestore
        .add(
          { collection: 'contacts' },
          {
            ...newInstance,
            createdBy: uid,
            createdAt: firestore.FieldValue.serverTimestamp()
          }
        )
        .then(() => {
          toggleDialog()
          showSuccess('Contact added successfully')
        })
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not add contact')
          return Promise.reject(err)
        })
    },
    deleteContact: props => contactId => {
      const { firestore, showError, showSuccess } = props
      return firestore
        .delete({ collection: 'contacts', doc: contactId })
        .then(() => showSuccess('Contact deleted successfully'))
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not delete contact')
          return Promise.reject(err)
        })
    },
    goToContact: ({ history }) => contactId => {
      history.push(`${CONTACTS_PATH}/${contactId}`)
    }
  }),
  // Add styles as props.classes
  withStyles(styles)
)
