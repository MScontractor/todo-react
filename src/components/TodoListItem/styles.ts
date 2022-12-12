import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      border: '1px solid rgba(0,0,0,.23)',
      borderRadius: '8px',
      marginBottom: '8px',
    },
    button: {
      margin: 5,
      cursor: 'pointer',
    }
  }
));