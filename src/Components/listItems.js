import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export const mainListItems = (
  <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Chomsky Hierarchy
    </Typography>
    <ListItemButton component={RouterLink} to="/Video/">
      <ListItemText primary="Session 1" />
    </ListItemButton>
  
    <ListItemButton component={RouterLink} to="/Video/Session2">
      <ListItemText primary="Session 2" />
    </ListItemButton>

    <ListItemButton component={RouterLink} to="/Video/Session3">
      <ListItemText primary="Session 3" />
    </ListItemButton>

    <ListItemButton component={RouterLink} to="/Video/Session4">
      <ListItemText primary="Session 4" />
    </ListItemButton>

  </React.Fragment>
);
