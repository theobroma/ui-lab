import React from 'react';
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';
import { FaRegShareSquare } from 'react-icons/fa';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  alpha,
  Button,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Popper,
} from '@mui/material';

// import Button from '@material-ui/core/Button';
// import Fade from '@material-ui/core/Fade';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import { makeStyles } from '@material-ui/core/styles';
// import { alpha } from '@material-ui/core/styles/colorManipulator';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import LinkIcon from '@material-ui/icons/Link';
// import RedditIcon from '@material-ui/icons/Reddit';
// import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  btn: {
    backgroundColor: '#26a27b',
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: alpha('#26a27b', 0.9085),
    },
  },
}));

const DropdownShareButton = () => {
  const classes = useStyles();

  const handleShare = (e: any) => {
    e.preventDefault();
    const ahref = window.location.href;
    const encodedAhref = encodeURIComponent(ahref);
    let link;
    switch (e.currentTarget.id) {
      case 'facebook':
        link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
        open(link);
        break;
      case 'twitter':
        link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
        open(link);
        break;
      case 'reddit':
        link = `https://www.reddit.com/submit?url=${encodedAhref}`;
        open(link);
        break;
      case 'copy':
        navigator.clipboard.writeText(ahref);
        break;
      default:
        break;
    }
  };

  const open = (socialLink: string) => {
    window.open(socialLink, '_blank');
  };

  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button
            className={classes.btn}
            color="inherit"
            {...bindToggle(popupState)}
          >
            <FaRegShareSquare />
            Share Article
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <List
                    dense
                    // className={classes.paper}
                  >
                    <ListItem button id="facebook" onClick={handleShare}>
                      <ListItemIcon>
                        <FacebookIcon />
                      </ListItemIcon>
                      <ListItemText primary="Facebook" />
                    </ListItem>
                    <ListItem button id="twitter" onClick={handleShare}>
                      <ListItemIcon>
                        <TwitterIcon />
                      </ListItemIcon>
                      <ListItemText primary="Twitter" />
                    </ListItem>
                    <ListItem button id="reddit" onClick={handleShare}>
                      <ListItemIcon>
                        <RedditIcon />
                      </ListItemIcon>
                      <ListItemText primary="Reddit" />
                    </ListItem>
                    <ListItem button id="copy" onClick={handleShare}>
                      <ListItemIcon>
                        <LinkIcon />
                      </ListItemIcon>
                      <ListItemText primary="Copy Link" />
                    </ListItem>
                  </List>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
};

export default DropdownShareButton;
