import React from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { useStyles } from './styles';

export const PaginationComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.paginationNumber}>
            <Typography>1</Typography>
          </div>
          <div className={classes.paginationNumber}>
            <Typography>2</Typography>
          </div>
          <div className={classes.pagination}>
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};
