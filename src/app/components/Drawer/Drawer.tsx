import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LanguageIcon from '@material-ui/icons/Language';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MicIcon from '@material-ui/icons/Mic';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import PeopleIcon from '@material-ui/icons/People';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { useStyles } from './styles';

export const DrawerComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.drawer}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <HomeIcon className={clsx(classes.icon, classes.home)} />
            <Typography className={clsx(classes.listItemText, classes.home)}>
              Home
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <PostAddIcon className={classes.icon} />
            <Typography className={classes.listItemText}>Add Post</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <LanguageIcon className={classes.icon} />
            <Typography className={classes.listItemText}>Add group</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <VpnLockIcon className={classes.icon} />
            <Typography className={classes.listItemText}>
              Groups page
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <DraftsIcon className={classes.icon} />
            <Typography className={classes.listItemText}>
              Communities
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <MenuBookIcon className={classes.icon} />
            <Typography className={classes.listItemText}>Questions</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <MicIcon className={classes.icon} />
            <Typography className={classes.listItemText}>Polls</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <LocalOfferIcon className={classes.icon} />
            <Typography className={classes.listItemText}>Tags</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <LocalCafeIcon className={classes.icon} />
            <Typography className={classes.listItemText}>Badges</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <PeopleIcon className={classes.icon} />
            <Typography className={classes.listItemText}>Users</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <LocationSearchingIcon className={classes.icon} />
            <Typography className={classes.listItemText}>Help</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <RemoveShoppingCartIcon className={classes.icon} />
            <Typography className={classes.listItemText}>Buy Theme</Typography>
          </ListItem>
        </List>
      </div>
    </>
  );
};
