import React from 'react';
import { Tab, Tabs, AppBar, Toolbar, Divider, Link } from '@material-ui/core';

import clsx from 'clsx';
import { useStyles } from './styles';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TabsComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.container}>
            <Link
              className={clsx(classes.linkSelected, classes.link)}
              underline="none"
            >
              Recent Questions
            </Link>
            <Link className={clsx(classes.link)} underline="none">
              Most Answered
            </Link>
            <Link className={clsx(classes.link)} underline="none">
              Bump Question
            </Link>
            <Link className={clsx(classes.link)} underline="none">
              Answers
            </Link>
            <Link className={clsx(classes.link)} underline="none">
              Most Visited
            </Link>
            <Link className={clsx(classes.link)} underline="none">
              Most Voted
            </Link>
            <Link className={clsx(classes.link)} underline="none">
              No Answers
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.brdr}></div>
      <Divider />
    </>
  );
};
