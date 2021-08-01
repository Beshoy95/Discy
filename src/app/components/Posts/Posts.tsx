import React from 'react';
import { Box, Grid, Link, Typography, Divider } from '@material-ui/core';

import avatar from '../../images/avatar.png';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import VisibilityIcon from '@material-ui/icons/Visibility';
import clsx from 'clsx';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Posts = ({
  votes,
  author,
  title,
  postDate,
  postIn,
  postQuestion,
  postAnswer,
  commentTagsLang,
  postReview,
  postViews,
  color,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Divider />
      <TabPanel value={value} index={0}>
        <div className={classes.tabQuestions}>
          <>
            <div className={classes.container}>
              <div>
                <div>
                  <img src={avatar} alt="avatar" className={classes.avatar} />
                </div>
                <div className={classes.votes}>
                  <ExpandLessIcon className={classes.expandLess} />
                  <div className={classes.postVotes}>{votes}</div>
                  <ExpandMoreIcon className={classes.expandMore} />
                </div>
              </div>

              <div className={classes.headline}>
                <div className={classes.postHeadline}>
                  <Typography className={classes.postAuthor}>
                    {author}
                  </Typography>
                  <div
                    className={classes.titleContainer}
                    style={{ backgroundColor: color }}
                  >
                    <Typography className={classes.title}>{title}</Typography>
                  </div>
                  <Typography>
                    <span className={classes.asked}>Asked:</span>
                    <span className={classes.postDate}>{postDate}</span>
                  </Typography>
                  <Typography>
                    <span className={classes.in}>In:</span>
                    <span className={classes.postLang}>{postIn}</span>
                  </Typography>
                </div>

                <div>
                  <Typography className={classes.postQuestion}>
                    {postQuestion}
                  </Typography>
                </div>

                <div>
                  <Typography className={classes.postAnswer}>
                    {postAnswer}
                  </Typography>
                </div>

                <div className={classes.commentTags}>
                  <Link
                    underline="none"
                    className={clsx(
                      classes.commentTagsLang,
                      classes.commentTagsOptions,
                    )}
                  >
                    {commentTagsLang}
                  </Link>
                  <Link underline="none" className={classes.commentTagsOptions}>
                    language
                  </Link>
                </div>
                <div className={classes.postReviews}>
                  <div className={classes.chatIcon}>
                    <ChatBubbleIcon className={classes.chat} />
                  </div>
                  <Typography className={classes.postReview}>
                    {postReview}
                  </Typography>
                  <div className={classes.chatIcon}>
                    <VisibilityIcon className={classes.visible} />
                  </div>
                  <Typography
                    className={clsx(classes.postReview, classes.postViews)}
                  >
                    {postViews}
                  </Typography>
                </div>
              </div>
            </div>
          </>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Most Answered
      </TabPanel>
      <TabPanel value={value} index={2}>
        Bump Question
      </TabPanel>
      <TabPanel value={value} index={3}>
        Answers
      </TabPanel>
      <TabPanel value={value} index={4}>
        Most Visited
      </TabPanel>
      <TabPanel value={value} index={5}>
        Most Voted
      </TabPanel>
      <TabPanel value={value} index={6}>
        No Answers
      </TabPanel>
    </>
  );
};
