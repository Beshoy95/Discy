import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { useStyles } from './styles';

export const CopyRightsComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.copyRights}>
        <div>
          <Typography className={classes.text}>
            © 2021 Discy. All Rights Reserved
          </Typography>
        </div>
        <div>
          <Typography className={classes.text}>
            With Love by
            <Link className={classes.link} underline="none">
              2code
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
};
