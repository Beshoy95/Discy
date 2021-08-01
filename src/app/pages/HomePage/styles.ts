import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section1: {
      borderBottom: 'solid 0.5px #E1E3E3',
    },
    headerContainer: {
      margin: 'auto',
    },
    sideNav: {
      backgroundColor: '#F2F2F2',
      paddingRight: '20px',
    },
    drawer: {
      position: 'sticky',
      top: '0px',
    },
    BottomDrawer: {
      position: 'sticky',
      top: '0px',
    },
    container: {},
  }),
);
