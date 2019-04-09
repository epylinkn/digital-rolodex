import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import CalendarToday from '@material-ui/icons/CalendarToday'

function ContactTile({ name, age, onSelect, onDelete, showDelete, classes }) {
  return (
    <Paper className={classes.root}>
      <div className={classes.top}>
        <h2 className={classes.name} onClick={onSelect}>
          {name || 'No Name'}
        </h2>
        <span className={classes.age}>
          {age || 'XX'}
        </span>
        {showDelete && onDelete ? (
          <Tooltip title="delete">
            <IconButton onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : null}
        <Tooltip title="calendar">
          <IconButton>
            <CalendarToday />
          </IconButton>
        </Tooltip>
      </div>
    </Paper>
  )
}

ContactTile.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  name: PropTypes.string,
  age: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  showDelete: PropTypes.bool
}

ContactTile.defaultProps = {
  showDelete: true
}

export default ContactTile
