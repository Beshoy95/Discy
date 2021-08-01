import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      cursor: 'pointer',
    },
    tabQuestions: {
      padding: '10px',
      paddingTop: '4px',
    },
    authorImage: {
      marginRight: '10px',
    },
    postHeadline: {
      display: 'flex',
    },
    postAuthor: {
      color: '#2d6ff7',
      marginRight: '8px',
      cursor: 'pointer',
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 700,
      '&:hover': {
        color: 'black',
      },
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '2px',
      paddingRight: '2px',
      marginLeft: '10px',
      marginRight: '12px',
      height: 'fit-content',
      marginTop: '4px',
      padding: '2px',
    },
    title: {
      color: 'white',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '15px',
      fontWeight: 400,
    },
    asked: {
      color: '#7c7f85',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '22px',
      fontWeight: 400,
    },
    postDate: {
      color: '#2d6ff7',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '22px',
      fontWeight: 400,
      marginRight: '10px',
      '&:hover': {
        color: 'black',
        cursor: 'pointer',
      },
    },
    in: {
      color: '#7c7f85',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '22px',
      fontWeight: 400,
    },
    postLang: {
      color: '#2d6ff7',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '22px',
      fontWeight: 400,
      marginRight: '10px',
      '&:hover': {
        color: '#26333b',
        cursor: 'pointer',
      },
    },
    postQuestion: {
      color: '#272930',
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '19px',
      lineHeight: '27px',
      fontWeight: 'bold',
      marginTop: '5px',
      cursor: 'pointer',
      '&:hover': {
        color: 'blue',
      },
    },
    postAnswer: {
      marginTop: '15px',
      color: '#707885',
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '15px',
      lineHeight: '30px',
      fontWeight: 400,
    },
    commentTags: {
      marginTop: '20px',
    },
    commentTagsOptions: {
      border: 'solid  #e1e3e3 1px',
      color: '#7c7f85',
      padding: '3px',
      marginLeft: '3px',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '20px',
      fontWeight: 400,
      cursor: 'pointer',
      borderRadius: '3px',
      '&:hover': {
        backgroundColor: '#2d6ff7',
        color: 'white',
      },
    },
    commentTagsLang: {
      marginRight: '5px',
    },
    postReviews: {
      display: 'flex',
      marginTop: '10px',
    },
    chat: {
      color: 'grey',
      width: '15px',
      cursor: 'pointer',
    },
    visible: {
      color: 'grey',
      width: '15px',
      cursor: 'pointer',
      marginLeft: '15px',
    },
    chatIcon: {
      marginTop: '15px',
    },
    postReview: {
      cursor: 'pointer',
      fontFamily: 'open sans, Arial, sans-serif',
      fontSize: '12px',
      lineHeight: '15px',
      fontWeight: 400,
      color: '#7c7f85',
      display: 'flex',
      marginLeft: '15px',
      marginTop: '20px',
    },
    postViews: {
      marginLeft: '15px',
    },
    postVotes: {
      fontFamily: 'roboto, Arial, sans-serif',
      fontSize: '20px',
      lineHeight: '22px',
      fontWeight: 700,
      color: '#677075',
    },
    expandMore: {},
    expandLess: {},
    container: {
      display: 'flex',
    },
    headline: {
      marginLeft: '20px',
    },
    votes: {
      marginLeft: '3px',
      marginTop: '45px',
    },
  }),
);
