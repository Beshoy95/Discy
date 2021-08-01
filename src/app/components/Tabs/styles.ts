import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      boxShadow: 'none',
      backgroundColor: 'white',
      color: 'black',
    },
    toolBar: {
      marginLeft: '3px',
      marginTop: '8px',
      marginBottom: '8px',
    },
    link: {
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 700,
      color: '#7c7f85',
      marginRight: '15px',
      cursor: 'pointer',
      '&:hover': {
        color: '#26333b',
      },
    },
    linkSelected: {
      color: '#26333b',
    },
    container: {},
    brdr: {
      backgroundColor: 'black',
      width: '120px',
      height: '3px',
      position: 'relative',
      top: '4px',
      left: '20px',
    },
  }),
);
