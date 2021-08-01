import React from 'react';
import { Link } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';
import avatar from '../../images/avatar.png';
import ForumIcon from '@material-ui/icons/Forum';

export const CommentBar = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.commentsBar}>
        <img src={avatar} alt="avatar" className={classes.avatar} />
        <div className={classes.inputSearch}>
          <Link underline="none" className={classes.question}>
            <ForumIcon className={classes.chatIcon} />
            what's your question ?
          </Link>
        </div>
      </div>
    </>
  );
};
