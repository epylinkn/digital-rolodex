import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import DeleteIcon from '@material-ui/icons/Delete'
import InfoIcon from '@material-ui/icons/Info'
import EditIcon from '@material-ui/icons/Edit'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import DescriptionIcon from '@material-ui/icons/Description'
import FaceIcon from '@material-ui/icons/Face'
import Avatar from '@material-ui/core/Avatar';

import GroupIcon from '@material-ui/icons/Group'
import PhoneIcon from '@material-ui/icons/Phone'
import MessageIcon from '@material-ui/icons/Message'

function ContactPanelActions({
  classes,
  showDelete,
  onDelete,
  onSelect,
}) {
  return (
    <ExpansionPanelActions>
      <Button variant="outlined" size="medium" color="primary">
        <FaceIcon className={classes.leftIcon} />
        Add Touch
      </Button>
      <Button variant="outlined" size="medium">
        <DescriptionIcon className={classes.leftIcon} />
        Touch History
      </Button>
      <Button variant="outlined" size="medium">
        <CalendarIcon className={classes.leftIcon} />
        Calendar
      </Button>
      {onSelect ? (
        <Button variant="outlined" size="medium" onClick={onSelect}>
          <EditIcon className={classes.leftIcon} />
          Edit
        </Button>
      ) : null}
      {showDelete && onDelete ? (
        <Button variant="outlined" size="medium" color="secondary" onClick={onDelete}>
          <DeleteIcon className={classes.leftIcon} />
          Delete
        </Button>
      ) : null}
    </ExpansionPanelActions>
  )
}

function ExpectedAge({
  classes,
  age,
}) {
  return (
    <div className={classes.column15}>
      <Typography className={classes.secondaryHeading}>Approx. Age</Typography>
      <Typography className={classes.significantNumber}>{age}</Typography>
    </div>
  )
}

function LetterAvatar(props) {
  const { name, classes } = props

  function initialsFor(name) {
    let initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
  }

  return (
    <Avatar className={classes.avatar}>{initialsFor(name)}</Avatar>
  )
}

function ExpectedTouches({
  classes,
  age,
}) {
  const maleExpectancy = 76.2
  const femaleExpectancy = 81.1
  const avgExpectancy = 78.7

  const yearsRemaining = (age < avgExpectancy) ? avgExpectancy - age : 1
  const expectedBodyTouches = (5 * yearsRemaining).toFixed(0)
  const expectedPhoneTouches = (12 * yearsRemaining).toFixed(0)
  const expectedMessageTouches = (42 * yearsRemaining).toFixed(0)

  return (
    <div className={classes.column60}>
      <Typography className={classes.secondaryHeading}>
        Expected Touches
        <InfoIcon style={{ height: '0.8em', marginBottom: '-5px' }} />
      </Typography>

      <div className={classes.numbers}>
        <div className={classes.tiles}>
          <GroupIcon className={classes.bigIcon} />
          <Typography className={classes.significantNumber}>{expectedBodyTouches}</Typography>
        </div>
        <div className={classes.tiles}>
          <PhoneIcon className={classes.bigIcon} />
          <Typography className={classes.significantNumber}>{expectedPhoneTouches}</Typography>
        </div>
        <div className={classes.tiles}>
          <MessageIcon className={classes.bigIcon} />
          <Typography className={classes.significantNumber}>{expectedMessageTouches}</Typography>
        </div>
      </div>
    </div>
  )
}

function ContactPanelCalendar({
  classes,
}) {
  return (
    <>
      <Divider />
      <ExpansionPanelDetails className={classes.details}>
        <div className={classes.dayOfWeek}>
          <div className={classes.dayLabel}>MONDAY</div>
        </div>
        <div className={classes.dayOfWeek}>
          <div className={classes.dayLabel}>TUESDAY</div>
          <div className={classes.dayAvailability} style={{ marginTop: '160%', height: '10%' }}>
            <span className={classes.dayAvailabilityText}>
              7-9pm
            </span>
          </div>
        </div>
        <div className={classes.dayOfWeek}>
          <div className={classes.dayLabel}>WEDNESDAY</div>
        </div>
        <div className={classes.dayOfWeek}>
          <div className={classes.dayLabel}>THURSDAY</div>
        </div>
        <div className={classes.dayOfWeek}>
          <div className={classes.dayLabel}>FRIDAY</div>
        </div>
        <div className={classes.dayOfWeek}>
          <div className={classes.dayLabel}>SATURDAY</div>
        </div>
        <div className={classes.dayOfWeek}>
          <div className={classes.dayLabel}>SUNDAY</div>
          <div className={classes.dayAvailability} style={{ marginTop: '40%', height: '20%' }}>
            <span className={classes.dayAvailabilityText}>
              12-4pm
            </span>
          </div>
        </div>
      </ExpansionPanelDetails>
    </>
  )
}

function ContactPanel({
  name,
  age,
  classes,
  onDelete,
  showDelete,
  onSelect,
}) {
  let showCalender = true
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column25}>
            <LetterAvatar classes={classes} name={name} />
            <Typography className={classes.heading}>{name}</Typography>
          </div>
          <ExpectedAge age={age} classes={classes} />
          <ExpectedTouches age={age} classes={classes} />
        </ExpansionPanelDetails>

        <Divider />

        <ContactPanelActions
          classes={classes}
          showDelete={true}
          onDelete={onDelete}
          onSelect={onSelect}
        />

        {showCalender ? (
          <ContactPanelCalendar classes={classes} />
        ) : null}

      </ExpansionPanel>
    </div>
  );
}

ContactPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  age: PropTypes.string,
  showDelete: PropTypes.bool,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
}

ContactPanel.defaultProps = {
  showDelete: true
}

export default ContactPanel
