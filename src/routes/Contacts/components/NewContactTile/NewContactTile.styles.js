export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    height: '100px',
    width: '300px',
    margin: theme.spacing.unit * 0.5,
    padding: theme.spacing.unit * 1.3,
    overflow: 'hidden'
  },
  newButtons: {
    display: 'inline-block'
  },
  iconLabel: {
    marginTop: '10px'
  }
})
