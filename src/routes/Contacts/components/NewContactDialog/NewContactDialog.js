import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { required } from 'utils/form'

function NewContactDialog({ classes, handleSubmit, open, onRequestClose }) {
  return (
    <Dialog open={open} onClose={onRequestClose} fullWidth={true} maxWidth="sm">
      <DialogTitle id="new-contact-dialog-title">New Contact</DialogTitle>
      <form onSubmit={handleSubmit} className={classes.inputs}>
        <DialogContent>
          <Field
            name="name"
            component={TextField}
            label="Contact Name"
            validate={[required]}
          />
          <br/>
          <br/>
          <Field
            type="number"
            name="age"
            label="Age"
            component={TextField}
            validate={[required]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onRequestClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

NewContactDialog.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default NewContactDialog
