import React from 'react';
import { AppBar, Toolbar, Link, Input, Button } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './styles';
import logo from '../../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';

export const AppBarComponent = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        style={{ boxShadow: 'none' }}
        className={classes.appBar}
      >
        <Toolbar>
          <div>
            <Link
              className={clsx(classes.navItems, classes.discy)}
              underline="none"
            >
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={classes.navList}>
            <Link
              className={clsx(classes.navItems, classes.home)}
              underline="none"
            >
              Home
            </Link>

            <Link
              className={clsx(classes.navItems, classes.navListItem)}
              underline="none"
            >
              About Us
            </Link>
            <Link
              className={clsx(classes.navItems, classes.navListItem)}
              underline="none"
            >
              Blog
            </Link>
            <Link
              className={clsx(classes.navItems, classes.navListItem)}
              underline="none"
            >
              Contact Us
            </Link>
            <div className={classes.searchAppbar}>
              <Input
                disableUnderline={true}
                placeholder="Type Search Words"
                className={classes.searchText}
              />
              <SearchIcon className={classes.searchIcon} />
            </div>

            <div className={clsx(classes.btn1)}>Sign In</div>
            <div className={clsx(classes.btn2)}>Sign Up</div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
