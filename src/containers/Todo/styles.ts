import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    height: '500px',
    overflow: 'auto',
    width: '100%',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '680px', 
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8px 0',
    height: '56px',
  },
  actionsGroup: {
    display: 'flex',
  },
  actionsSwitch: {
    margin: '0',
  },
}))

export default useStyles