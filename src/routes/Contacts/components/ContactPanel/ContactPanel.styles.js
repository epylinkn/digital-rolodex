export default theme => ({
  root: {
    // width: '100%',
    width: '915px',
    margin: '10px 0'
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  significantNumber: {
    fontSize: theme.typography.pxToRem(48),
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    marginBottom: '-18px',
  },
  column25: {
    flexBasis: '18%',
    textAlign: 'center',
  },
  column15: {
    flexBasis: '22%',
    textAlign: 'center',
  },
  column60: {
    flexBasis: '60%',
  },
  dayOfWeek: {
    flexBasis: '14.28%',
    height: '300px',
    background: 'rgba(0, 0, 0, 0.10)',
    margin: '15px 1px 0px'
  },
  dayLabel: {
    background: 'rgba(0, 200, 200, 0.20)',
    textAlign: 'center',
    padding: '3px 0',
  },
  dayAvailability: {
    background: 'rgba(200, 0, 200, 0.20)',
    display: 'flex',
  },
  dayAvailabilityText: {
    margin: 'auto',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 20,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
    fontSize: 10,
  },
  iconSmall: {
    fontSize: 20,
  },
  avatar: {
    margin: '10px auto',
    width: 120,
    height: 120,
    color: '#fff',
  },
  bigIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 40,
  },
  numbers: {
    ...theme.flexRowCenter,
  },
  tiles: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    minWidth: '33.33%'
  }
})
