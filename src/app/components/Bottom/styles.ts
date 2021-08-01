import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomContainer: {
      padding: '40px',
      marginTop: '30px',
    },
    bottom: {
      display: 'flex',
      paddingBottom: '40px',
    },
    bottomDesc: {
      display: 'flex',
      paddingTop: '36px',
    },
    bottomImg: {
      width: '45px',
      height: '45px',
    },
    bottomContent: {
      color: '#707885',
      marginLeft: '4px',
      fontFamily: 'roboto',
      fontSize: '13px',
      lineHeight: '22px',
      fontWeight: 400,
    },
    title: {
      marginBottom: '10px',
      fontSize: '14px',
      lineHeight: '23px',
      color: '#26333b',
      fontFamily: 'roboto',
      fontWeight: 900,
    },
    subItem: {
      cursor: 'pointer',
      fontSize: '13px',
      lineHeight: '23px',
      color: '#707885',
      '&:hover': {
        color: '#2d6ff7',
      },
    },
    icons: {
      display: 'flex',
    },
    icon: {
      backgroundColor: '#6B3DE4',
      color: 'white',
      borderRadius: '50%',
      marginRight: '8px',
      padding: '3px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'black',
      },
    },
  }),
);
