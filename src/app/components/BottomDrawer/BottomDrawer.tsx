import React from 'react';
import { Typography, Link } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';
import PeopleIcon from '@material-ui/icons/People';
import avatar from '../../images/avatar.png';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

export const BottomDrawerComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.trending}>
        <div className={classes.trendingTitle}>
          <PeopleIcon className={classes.peopleIcon} />
          <Typography className={classes.members}>Top Members</Typography>
        </div>

        <div>
          <div className={classes.memberPost}>
            <img src={avatar} alt="avatar" className={classes.memberAvatar} />
            <div>
              <Typography className={classes.memberName}>
                Aaron Aiken
              </Typography>
              <div className={classes.memberVotes}>
                <Typography className={classes.memberPoints}>
                  3 Questions
                </Typography>
                <Typography className={classes.memberPoints}>
                  378 Points
                </Typography>
              </div>
              <div>
                <Typography className={classes.light}>Enlightened</Typography>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.memberPost}>
            <img src={avatar} alt="avatar" className={classes.memberAvatar} />
            <div>
              <Typography className={classes.memberName}>
                Marko Smith
              </Typography>
              <div className={classes.memberVotes}>
                <Typography className={classes.memberPoints}>
                  3 Questions
                </Typography>
                <Typography className={classes.memberPoints}>
                  250 Points
                </Typography>
              </div>
              <div>
                <Typography className={classes.light}>Enlightened</Typography>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.memberPost}>
            <img src={avatar} alt="avatar" className={classes.memberAvatar} />
            <div>
              <Typography className={classes.memberName}>
                Martin Hope
              </Typography>
              <div className={classes.memberVotes}>
                <Typography className={classes.memberPoints}>
                  3 Questions
                </Typography>
                <Typography className={classes.memberPoints}>
                  250 Points
                </Typography>
              </div>
              <div>
                <Typography
                  className={clsx(classes.light, classes.professional)}
                >
                  Professional
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.trendingTags}>
        <div className={classes.trendingTitle}>
          <LoyaltyIcon className={classes.peopleIcon} />
          <Typography className={classes.members}>Trending Tags</Typography>
        </div>
        <div className={classes.links}>
          <Link underline="none" className={classes.link}>
            analytics
          </Link>
          <Link underline="none" className={classes.link}>
            british
          </Link>
          <Link underline="none" className={classes.link}>
            company
          </Link>
        </div>
        <div className={classes.links}>
          <Link underline="none" className={classes.link}>
            computer
          </Link>
          <Link underline="none" className={classes.link}>
            developers
          </Link>
          <Link underline="none" className={classes.link}>
            django
          </Link>
        </div>
        <div className={classes.links}>
          <Link underline="none" className={classes.link}>
            employee
          </Link>
          <Link underline="none" className={classes.link}>
            employer
          </Link>
          <Link underline="none" className={classes.link}>
            english
          </Link>
        </div>
        <div className={classes.links}>
          <Link underline="none" className={classes.link}>
            facebook
          </Link>
          <Link underline="none" className={classes.link}>
            french
          </Link>
          <Link underline="none" className={classes.link}>
            google
          </Link>
        </div>
        <div className={classes.links}>
          <Link underline="none" className={classes.link}>
            interview
          </Link>
          <Link underline="none" className={classes.link}>
            javascript
          </Link>
          <Link underline="none" className={classes.link}>
            language
          </Link>
        </div>
        <div className={classes.links}>
          <Link underline="none" className={classes.link}>
            life
          </Link>
          <Link underline="none" className={classes.link}>
            php
          </Link>
          <Link underline="none" className={classes.link}>
            programmer
          </Link>
        </div>
        <div className={classes.links}>
          <Link underline="none" className={classes.link}>
            programs
          </Link>
          <Link underline="none" className={classes.link}>
            salary
          </Link>
          <Link underline="none" className={classes.link}>
            university
          </Link>
        </div>
      </div>
    </>
  );
};
