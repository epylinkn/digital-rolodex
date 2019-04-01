import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

function ContactPage({ contact, contactId, classes }) {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} component="h2">
            {contact.name || 'Contact'}
          </Typography>
          <Typography className={classes.subtitle}>{contactId}</Typography>
          <div style={{ marginTop: '10rem' }}>
            <pre>{JSON.stringify(contact, null, 2)}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  contact: PropTypes.object.isRequired, // from enhancer (connect)
  contactId: PropTypes.string.isRequired // from enhancer (withProps)
}

export default ContactPage
