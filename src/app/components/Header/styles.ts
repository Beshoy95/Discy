import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      textAlign: 'center',
      marginTop: '50px',
    },
    title: {
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '22px',
      lineHeight: '36px',
      color: '#272930',
      fontWeight: 700,
    },
    desc: {
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '15px',
      lineHeight: '26px',
      color: '#707885',
      fontWeight: 400,
      marginTop: '20px',
    },
    buttonHeader: {
      backgroundColor: '#272930',
      margin: '20px',
      marginBottom: '50px',
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '26px',
      fontWeight: 700,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'blue',
      },
      color: 'white',
      paddingLeft: '20px',
      paddingRight: '20px',
      border: 'none',
    },
  }),
);
