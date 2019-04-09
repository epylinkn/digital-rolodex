import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import ContactRoute from 'routes/Contacts/routes/Contact'
import ContactTile from '../ContactTile'
import ContactPanel from '../ContactPanel'
import NewContactTile from '../NewContactTile'
import NewContactDialog from '../NewContactDialog'
import { renderChildren } from 'utils/router'

function ContactsPage({
  contacts,
  collabProjects,
  auth,
  newDialogOpen,
  toggleDialog,
  deleteContact,
  addContact,
  classes,
  match,
  goToContact
}) {
  return (
    <Switch>
      {/* Child routes */}
      {renderChildren([ContactRoute], match, { auth })}
      {/* Main Route */}
      <Route
        exact
        path={match.path}
        render={() => (
          <div className={classes.root}>
            <NewContactDialog
              onSubmit={addContact}
              open={newDialogOpen}
              onRequestClose={toggleDialog}
            />
            <div className={classes.tiles}>
              <NewContactTile onClick={toggleDialog} />
              {!isEmpty(contacts) &&
                contacts.map((contact, ind) => (
                  <ContactPanel
                    key={`Contact-${contact.id}-${ind}`}
                    name={contact.name}
                    age={contact.age}
                    onSelect={() => goToContact(contact.id)}
                    onDelete={() => deleteContact(contact.id)}
                  />
                  // <ContactTile
                  //   key={`Contact-${contact.id}-${ind}`}
                  //   name={contact.name}
                  //   age={contact.age}
                  //   onSelect={() => goToContact(contact.id)}
                  //   onDelete={() => deleteContact(contact.id)}
                  // />
                ))}
            </div>
          </div>
        )}
      />
    </Switch>
  )
}

ContactsPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
  contacts: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
  newDialogOpen: PropTypes.bool, // from enhancer (withStateHandlers)
  toggleDialog: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  deleteContact: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  collabContacts: PropTypes.object, // from enhancer (withHandlers - firebase)
  addContact: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  goToContact: PropTypes.func.isRequired // from enhancer (withHandlers - router)
}

export default ContactsPage
