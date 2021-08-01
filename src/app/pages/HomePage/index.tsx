import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Divider } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';
import { CommentBar } from 'app/components/CommentBar/CommentBar';
import { TabsComponent } from 'app/components/Tabs/Tabs';
import { DrawerComponent } from 'app/components/Drawer/Drawer';
import { AppBarComponent } from 'app/components/AppBar/AppBar';
import { HeaderComponent } from 'app/components/Header/Header';
import { CardComponent } from 'app/components/Card/Card';
import { BottomComponent } from 'app/components/Bottom/Bottom';
import { CopyRightsComponent } from 'app/components/CopyRights/CopyRights';
import { SideDrawerComponent } from 'app/components/SideDrawer/SideDrawer';
import { PaginationComponent } from 'app/components/Pagination/Pagination';
import { BottomDrawerComponent } from 'app/components/BottomDrawer/BottomDrawer';
import { PostsContainer } from 'app/components/PostsContainer/PostsContainer';

export function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className={classes.section1}>
        <AppBarComponent />

        <Grid container>
          <Grid item md={6} className={classes.headerContainer}>
            <HeaderComponent />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container>
          <Grid item md={2} className={classes.sideNav}>
            <div className={classes.drawer}>
              <DrawerComponent />
            </div>
          </Grid>

          <Grid item md={7}>
            <div className={classes.container}>
              <CommentBar />
              <Divider />
              <TabsComponent />
              <PostsContainer />
              <div>
                <PaginationComponent />
              </div>
            </div>
          </Grid>

          <Grid item md={3} className={classes.sideNav}>
            <div>
              <SideDrawerComponent />
            </div>
            <div className={classes.BottomDrawer}>
              <BottomDrawerComponent />
            </div>
          </Grid>
        </Grid>
        <Divider />
      </div>
      <div>
        <CardComponent />
      </div>
      <Divider />
      <div>
        <BottomComponent />
      </div>
      <Divider />
      <div>
        <CopyRightsComponent />
      </div>
    </>
  );
}
