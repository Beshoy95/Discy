import React from 'react';
import { Typography, Grid, Link, Button } from '@material-ui/core';
import clsx from 'clsx';
import cardImage1 from '../../images/cardImage1.jpg';
import cardImage2 from '../../images/cardImage2.jpg';
import cardImage3 from '../../images/cardImage3.jpg';
import { useStyles } from './styles';

export const CardComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.cardPost}>
        <Typography className={classes.title}>Latest News & Updates</Typography>
        <Grid container>
          <Grid item md={4}>
            <>
              <div className={classes.card}>
                <>
                  <img src={cardImage1} alt="cardImage" />
                </>
                <Typography className={classes.dateCard}>
                  On: April 18, 2018 / Comments:
                  <span className={classes.cardNumber}> 1</span>
                </Typography>
                <div className={classes.Subtitle}>
                  <Link className={classes.cardLink} underline="none">
                    Highlighting what’s important about questions & Answers on
                    Discy Community!
                  </Link>
                </div>
                <div>
                  <Typography className={classes.cardDesc}>
                    We want to make it easier to learn more about a question and
                    highlight key facts about it — such as how popular the
                    question is, how many people are interested in it, and who
                    the audience is. To accomplish ...
                  </Typography>
                </div>
              </div>
            </>
          </Grid>
          <Grid item md={4}>
            <>
              <div className={classes.card}>
                <div className={classes.img2}>
                  <img src={cardImage2} alt="cardImage" />
                </div>

                <Typography className={classes.dateCard}>
                  On: April 18, 2018 / Comments:
                  <span className={classes.cardNumber}> 0</span>
                </Typography>
                <div className={classes.Subtitle}>
                  <Link className={classes.cardLink} underline="none">
                    Organizational and company accounts on Discy Engine the next
                    step
                  </Link>
                </div>
                <div>
                  <Typography className={classes.cardDesc}>
                    We want to make it easier to learn more about a question and
                    highlight key facts about it — such as how popular the
                    question is, how many people are interested in it, and who
                    the audience is. To accomplish ...
                  </Typography>
                </div>
              </div>
            </>
          </Grid>
          <Grid item md={4}>
            <>
              <div className={classes.card}>
                <div className={classes.img3}>
                  <img src={cardImage3} alt="cardImage" />
                </div>
                <Typography className={classes.dateCard}>
                  On: April 18, 2018 / Comments:
                  <span className={classes.cardNumber}> 0</span>
                </Typography>
                <div className={classes.Subtitle}>
                  <Link className={classes.cardLink} underline="none">
                    Defining quality on Discy Engine — what a helpful answer
                    looks like?
                  </Link>
                </div>
                <>
                  <Typography className={classes.cardDesc}>
                    We want to make it easier to learn more about a question and
                    highlight key facts about it — such as how popular the
                    question is, how many people are interested in it, and who
                    the audience is. To accomplish ...
                  </Typography>
                </>
              </div>
            </>
          </Grid>
        </Grid>
        <div className={classes.buttonGroup}>
          <Button className={classes.button}>Explore Our Blog</Button>
        </div>
      </div>
    </>
  );
};
