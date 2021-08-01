import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    commentsBar: {
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
    },
    avatar: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      cursor: 'pointer',
    },
    question: {
      fontSize: '12px',
      color: '#707885',
      fontFamily: 'open sans, Arial, sans-serif',
      fontWeight: 400,
      lineHeight: '39px',
      '&:hover': {
        color: '#2d6ff7',
      },
    },
    inputSearch: {
      width: '100%',
      cursor: 'pointer',
      marginLeft: '10px',
      border: '1px solid #e1e3e3',
      padding: '1px',
    },
    chatIcon: {
      width: '15px',
      height: '15px',
      marginLeft: '10px',
      marginRight: '10px',
    },
  }),
);
