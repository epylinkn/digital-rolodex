import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { NEW_CONTACT_FORM_NAME } from 'constants/formNames'
import { withStyles } from '@material-ui/core/styles'
import styles from './NewContactDialog.styles'

export default compose(
  reduxForm({
    form: NEW_CONTACT_FORM_NAME,
    // Clear the form for future use (creating another project)
    onSubmitSuccess: (result, dispatch, props) => props.reset()
  }),
  withStyles(styles)
)
