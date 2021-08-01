import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '50px',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    pagination: {
      backgroundColor: '#2d6ff7',
      borderRadius: '2px',
      marginLeft: '10px',
      padding: '0 8px',
      height: '40px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      '&:hover': {
        color: 'white',
        backgroundColor: 'black',
      },
    },
    paginationNumber: {
      backgroundColor: '#2d6ff7',
      borderRadius: '2px',
      marginLeft: '10px',
      padding: '0 16px',
      color: 'white',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      '&:hover': {
        color: 'white',
        backgroundColor: 'black',
      },
    },
  }),
);
