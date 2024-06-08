//import React from 'react'
import IconButton from '@mui/material/IconButton';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';
function Notification() {
  return (
    
        <IconButton aria-label="fingerprint" color="inherit">
            <Badge badgeContent={0} color="error" showZero>
            <NotificationsActiveIcon />
            </Badge>  
      </IconButton>
    
    
  )
}

export default Notification