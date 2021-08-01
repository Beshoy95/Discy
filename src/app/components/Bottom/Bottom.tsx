import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WifiIcon from '@material-ui/icons/Wifi';
import { useStyles } from './styles';
import logoFooter from '../../images/logoFooter.png';

export const BottomComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bottomContainer}>
        <div className={classes.bottom}>
          <div className={classes.bottomDesc}>
            <img className={classes.bottomImg} src={logoFooter} alt="logo" />
            <Typography className={classes.bottomContent}>
              Discy is a social questions & Answers Engine which will help you
              establis your community and connect with other people.
            </Typography>
          </div>
          <Grid container>
            <Grid item md={3}>
              <div>
                <div>
                  <Typography className={classes.title}>About Us</Typography>
                </div>
                <div>
                  <Typography className={classes.subItem}>
                    Meet The Team
                  </Typography>
                  <Typography className={classes.subItem}>Blog</Typography>
                  <Typography className={classes.subItem}>About Us</Typography>
                  <Typography className={classes.subItem}>
                    Contact Us
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div>
                <div>
                  <Typography className={classes.title}>Legal Stuff</Typography>
                </div>
                <div>
                  <Typography className={classes.subItem}>
                    Terms of Use
                  </Typography>
                  <Typography className={classes.subItem}>
                    Privacy Policy
                  </Typography>
                  <Typography className={classes.subItem}>
                    Cookie Policy
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div>
                <div>
                  <Typography className={classes.title}>Help</Typography>
                </div>
                <div>
                  <Typography className={classes.subItem}>
                    Knowledge Base
                  </Typography>
                  <Typography className={classes.subItem}>Support</Typography>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div>
                <div>
                  <Typography className={classes.title}>Follow</Typography>
                </div>
                <div className={classes.icons}>
                  <div className={classes.icon}>
                    <FacebookIcon />
                  </div>
                  <div className={classes.icon}>
                    <TwitterIcon />
                  </div>
                  <div className={classes.icon}>
                    <LinkedInIcon />
                  </div>
                  <div className={classes.icon}>
                    <WifiIcon />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
