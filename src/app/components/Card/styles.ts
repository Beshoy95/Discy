import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '26px',
      marginBottom: '30px',
      marginTop: '30px',
    },
    cardPost: {
      padding: '30px',
      margin: 'auto',
    },
    card: {
      marginBottom: '30px',
      paddingRight: '30px',
    },
    dateCard: {
      fontSize: '11px',
      lineHeight: '22px',
      color: '#7c7f85',
      fontFamily: 'open sans, Arial, sans-serif',
      fontWeight: 400,
      marginTop: '20px',
      marginBottom: '10px',
      textAlign: 'center',
    },
    cardNumber: {
      color: 'blue',
    },
    Subtitle: {
      paddingLeft: '30px',
      paddingRight: '30px',
      textAlign: 'center',
    },
    cardLink: {
      cursor: 'pointer',
      color: 'black',
      fontFamily: 'roboto, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '19px',
      lineHeight: '27px',
      padding: '10px',
      '&:hover': {
        color: '#2d6ff7',
      },
    },
    cardDescContainer: {
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    cardDesc: {
      color: '#707885',
      fontFamily: 'roboto, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '30px',
      marginTop: '20px',
    },
    buttonGroup: {
      textAlign: 'center',
      marginTop: '30px',
      marginBottom: '30px',
    },
    button: {
      backgroundColor: 'blue',
      color: 'white',
      fontFamily: 'roboto, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '30px',
      paddingLeft: '20px',
      paddingRight: '20px',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#7C7F85',
      },
    },
    img2: {
      marginLeft: '15px',
    },
    img3: {
      marginLeft: '30px',
    },
  }),
);
