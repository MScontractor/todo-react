import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginBottom: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
}))

export default useStyles
