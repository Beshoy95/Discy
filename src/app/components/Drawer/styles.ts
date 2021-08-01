import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {},
    list: {
      marginTop: '35px',
      marginLeft: '8px',
    },
    listItem: {
      cursor: 'pointer',
      color: '#26333b',
      '&:hover': {
        color: '#2D6FF7',
      },
    },
    listItemText: {
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 700,
    },
    icon: {
      marginRight: '10px',
    },
    home: {
      color: '#2D6FF7',
    },
  }),
);
