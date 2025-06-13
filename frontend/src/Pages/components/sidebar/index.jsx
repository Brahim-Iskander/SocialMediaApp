import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './style.css'
export default function BasicList() {
  return (
    <Box className="sidebarra" sx={{ width: '100%', maxWidth: 345, bgcolor: 'background.paper' }}>
      <nav  aria-label="main mailbox folders">
        <List>

          <ListItem disablePadding>
            <ListItemButton className='sidebarra-item active'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton className='sidebarra-item' >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton className='sidebarra-item'>
              <ListItemIcon>
                <InsertPhotoIcon />
              </ListItemIcon>
              <ListItemText primary="Photos" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton className='sidebarra-item'>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="New feeds" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className='sidebarra-item'>
              <ListItemIcon>
                <PersonOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className='sidebarra-item'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
