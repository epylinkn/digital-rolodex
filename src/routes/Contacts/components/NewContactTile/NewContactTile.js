import React from 'react'
import PropTypes from 'prop-types'
import ContentAddCircle from '@material-ui/icons/AddCircle'
import ContentCalendarToday from '@material-ui/icons/CalendarToday'
import ContentCake from '@material-ui/icons/Cake'
import Paper from '@material-ui/core/Paper'

const iconSize = '2rem'
const iconStyle = { width: iconSize, height: iconSize }

function NewContactTile({ onClick, classes }) {
  return (
    <div>
      <div className={classes.newButtons}>
        <Paper className={classes.root} onClick={onClick}>
          <ContentAddCircle style={iconStyle} />
          <div className={classes.iconLabel}>New Contact</div>
        </Paper>
      </div>
      <div className={classes.newButtons}>
        <Paper className={classes.root}>
          <ContentCalendarToday style={iconStyle} />
          <div className={classes.iconLabel}>Office Hours</div>
        </Paper>
      </div>
      <div className={classes.newButtons}>
        <Paper className={classes.root}>
          <ContentCake style={iconStyle} />
          <div className={classes.iconLabel}>Cake Days</div>
        </Paper>
      </div>
    </div>
  )
}

NewContactTile.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  onClick: PropTypes.func.isRequired
}

export default NewContactTile
