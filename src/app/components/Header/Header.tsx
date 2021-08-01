import React from 'react';
import { Typography, Button } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';

export const HeaderComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <Typography className={classes.title}>
          Share & grow the world's knowledge!
        </Typography>
        <Typography className={classes.desc}>
          We want to connect the people who have knowledge to the people who
          need it, to bring together people with different perspectives so they
          can understand each other better, and to empower everyone to share
          their knowledge.
        </Typography>
        <Button className={classes.buttonHeader}>Create A New Account</Button>
      </div>
    </>
  );
};
