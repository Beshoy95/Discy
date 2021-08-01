import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    copyRights: {
      textAlign: 'center',
      marginTop: '30px',
    },
    text: {
      color: '#707885',
      fontSize: '13px',
      lineHeight: '22px',
      fontWeight: 400,
      fontFamily: 'roboto,Arial, sans-serif',
    },
    link: {
      cursor: 'pointer',
      color: '#2d6ff7',
      fontSize: '13px',
      marginLeft: '2px',
      lineHeight: '22px',
      paddingBottom: '40px',
      '&:hover': {
        color: 'black',
      },
    },
  }),
);
