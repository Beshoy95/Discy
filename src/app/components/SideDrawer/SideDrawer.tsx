import React, { useState } from 'react';
import {
  Typography,
  Grid,
  AppBar,
  Tabs,
  Tab,
  Box,
  Divider,
} from '@material-ui/core';

import avatar from '../../images/avatar.png';
import BarChartIcon from '@material-ui/icons/BarChart';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import clsx from 'clsx';
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

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const SideDrawerComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div>
        <div className={classes.sideDrawer}>
          <div className={classes.cardContainer}>
            <div className={classes.title}>
              <BarChartIcon />
              <Typography className={classes.stats}>Stats</Typography>
            </div>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.card}>
                  <Typography
                    className={clsx(classes.cardcontent, classes.cardText)}
                  >
                    Questions
                  </Typography>
                  <Typography className={classes.cardNumber}>21</Typography>
                </div>
              </Grid>
              <Grid item md={6}>
                <div className={classes.card}>
                  <Typography
                    className={clsx(classes.cardcontent, classes.cardAnswer)}
                  >
                    Answers
                  </Typography>
                  <Typography className={classes.cardNumber}>72</Typography>
                </div>
              </Grid>
              <Grid item md={6}>
                <div className={classes.card}>
                  <Typography
                    className={clsx(classes.cardcontent, classes.cardAnswer)}
                  >
                    Best Answers
                  </Typography>
                  <Typography className={classes.cardNumber}>10</Typography>
                </div>
              </Grid>
              <Grid item md={6}>
                <div className={classes.card}>
                  <Typography
                    className={clsx(classes.cardcontent, classes.cardText)}
                  >
                    Users
                  </Typography>
                  <Typography className={classes.cardNumber}>10</Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className={classes.popularPanel}>
          <div className={classes.popularTab}>
            <div className={classes.popularHeader}>
              <AppBar position="static" elevation={0}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  className={classes.tabs}
                  TabIndicatorProps={{ className: classes.indicator }}
                >
                  <Tab
                    label="Popular"
                    {...a11yProps(0)}
                    className={clsx(classes.tabPopular, classes.tab)}
                  />

                  <Tab
                    label="Answers"
                    {...a11yProps(1)}
                    className={classes.tab}
                  />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <div>
                  <div className={classes.tabQuestion}>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
                    <Typography className={classes.tabDesc}>
                      How to approach applying for a job at a company ...
                    </Typography>
                  </div>
                  <div className={classes.tabRates}>
                    <ChatBubbleIcon className={classes.chat} />
                    <Typography className={classes.tabNumber}>
                      7 Answers
                    </Typography>
                  </div>
                  <Divider className={classes.divider} />
                  <div className={classes.tabQuestion}>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
                    <Typography className={classes.tabDesc}>
                      How to approach applying for a job at a company ...
                    </Typography>
                  </div>
                  <div className={classes.tabRates}>
                    <ChatBubbleIcon className={classes.chat} />
                    <Typography className={classes.tabNumber}>
                      7 Answers
                    </Typography>
                  </div>
                  <Divider className={classes.divider} />
                  <div className={classes.tabQuestion}>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
                    <Typography className={classes.tabDesc}>
                      How to approach applying for a job at a company ...
                    </Typography>
                  </div>
                  <div className={classes.tabRates}>
                    <ChatBubbleIcon className={classes.chat} />
                    <Typography className={classes.tabNumber}>
                      7 Answers
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div>
                  <div className={classes.tabQuestion}>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
                    <Typography className={classes.tabDesc}>
                      forbes2020 added an answer utfu
                    </Typography>
                  </div>
                  <div className={classes.tabRates}>
                    <Typography className={classes.tabNumber}>
                      July 28, 2021 at 1:55 am
                    </Typography>
                  </div>
                  <Divider className={classes.divider} />
                  <div className={classes.tabQuestion}>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
                    <Typography className={classes.tabDesc}>
                      Martin Hope added an answer They might be as confused as
                      to why you keep…
                    </Typography>
                  </div>
                  <div className={classes.tabRates}>
                    <Typography className={classes.tabNumber}>
                      July 28, 2021 at 1:55 am
                    </Typography>
                  </div>
                  <Divider className={classes.divider} />
                  <div className={classes.tabQuestion}>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
                    <Typography className={classes.tabDesc}>
                      Martin Hope added an answer They might be as confused as
                      to why you keep…
                    </Typography>
                  </div>
                  <div className={classes.tabRates}>
                    <Typography className={classes.tabNumber}>
                      July 28, 2021 at 1:55 am
                    </Typography>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
