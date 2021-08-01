import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    trending: {
      marginTop: '3px',
      marginRight: '8px',
      marginLeft: '17px',
      backgroundColor: 'white',
      padding: '10px',
      paddingTop: '30px',
    },
    trendingTitle: {
      display: 'flex',
      marginBottom: '15px',
    },
    peopleIcon: {
      marginLeft: '10px',
    },
    members: {
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '23px',
      fontWeight: 700,
      color: '#26333b',
      marginLeft: '15px',
    },
    memberPost: {
      display: 'flex',
      marginTop: '10px',
    },
    memberAvatar: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      marginLeft: '10px',
    },
    memberName: {
      marginLeft: '20px',
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '23px',
      fontWeight: 700,
      cursor: 'pointer',
      color: '#2d6ff7',
      '&:hover': {
        color: '#272930',
      },
    },
    memberVotes: {
      display: 'flex',
    },
    memberPoints: {
      marginLeft: '20px',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '12px',
      lineHeight: '22px',
      fontWeight: 400,
      cursor: 'pointer',
      color: '#272930',
      '&:hover': {
        color: '#2d6ff7',
      },
    },
    light: {
      color: 'white',
      backgroundColor: '#d9a34a',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '15px',
      fontWeight: 400,
      marginLeft: '15px',
      marginTop: '20px',
      padding: '3px',
      width: '70px',
    },
    professional: {
      backgroundColor: '#6B3DE4',
      width: '72px',
    },
    trendingTags: {
      marginTop: '3px',
      marginRight: '8px',
      marginLeft: '17px',
      backgroundColor: 'white',
      padding: '10px',
      paddingTop: '30px',
    },
    links: {
      marginTop: '7px',
      marginLeft: '12px',
    },
    link: {
      border: '0.9px solid #F2F2F2',
      color: '#74899C',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '22px',
      fontWeight: 400,
      padding: '4px',
      paddingLeft: '8px',
      paddingRight: '8px',
      marginRight: '10px',
      '&:hover': {
        color: 'white',
        backgroundColor: '#2D6FF7',
      },
    },
  }),
);
