import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper,
    },
    emptyPlaceholder: {
      minWidth: "90%",
      minHeight: 200,
    }
  }),
);