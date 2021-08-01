import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideDrawer: {
      backgroundColor: 'white',
      marginRight: '15px',
      marginLeft: '18px',
      padding: '6px',
    },
    cardContainer: {
      marginBottom: '20px',
      marginRight: '20px',
      marginLeft: '20px',
    },
    title: {
      display: 'flex',
      marginTop: '10px',
      marginBottom: '10px',
    },
    stats: {
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '23px',
      fontWeight: 700,
      color: '#26333b',
      marginLeft: '10px',
    },
    card: {
      border: '1px solid #E3E5E5',
    },
    cardcontent: {
      textAlign: 'center',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '12px',
      lineHeight: '22px',
      fontWeight: 400,
      marginTop: '10px',
    },
    cardText: {
      color: '#2d6ff7',
    },
    cardAnswer: {
      color: '#f05555',
    },
    cardNumber: {
      textAlign: 'center',
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '25px',
      lineHeight: '22px',
      fontWeight: 700,
      color: '#272930',
      marginTop: '10px',
      marginBottom: '10px',
    },
    popularPanel: {
      marginRight: '8px',
      marginLeft: '8px',
      marginTop: '10px',
    },
    popularTab: {
      paddingTop: '30px',
    },
    popularHeader: {
      marginLeft: '10px',
      backgroundColor: 'white',
    },
    tabs: {
      color: 'black',
      backgroundColor: '#f0f2f6',
      '& .Mui-selected': {
        backgroundColor: 'white',
        border: 'none',
      },
    },
    tab: {
      border: 'solid 0.01875em #dadada',
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '13px',
      lineHeight: '23px',
      fontWeight: 400,
      color: '#26333b',
      textTransform: 'none',
      minWidth: '28%',
      width: '28%',
      '&:hover': {
        color: '#2d6ff7',
      },
    },
    tabPopular: {
      marginLeft: '20px',
    },
    indicator: {
      display: 'none',
    },
    tabQuestion: {
      display: 'flex',
    },
    avatar: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
    },
    tabDesc: {
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 700,
      color: 'black',
      marginLeft: '12px',
      '&:hover': {
        color: '#2d6ff7',
      },
    },
    tabRates: {
      marginTop: '10px',
      marginLeft: '30px',
      marginBottom: '10px',
      display: 'flex',
    },
    chat: {
      color: 'grey',
      width: '20px',
    },
    tabNumber: {
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '12px',
      lineHeight: '21px',
      fontWeight: 400,
      color: '#677075',
      marginLeft: '10px',
      '&:hover': {
        color: '#2d6ff7',
      },
    },
    divider: {
      marginBottom: '20px',
    },
    tabPanel: {
      backgroundColor: 'white',
    },
  }),
);
