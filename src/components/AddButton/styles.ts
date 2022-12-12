import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignSelf: 'flex-end',
      height: '56px',
    },
  }),
)

export default useStyles
