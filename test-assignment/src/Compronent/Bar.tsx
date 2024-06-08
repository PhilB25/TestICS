//import React from 'react'
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Box, Stack } from '@mui/material';
function Bar() {
  return (
    <MenuList dense sx={{justifyContent:"center"}}>
        <MenuItem sx={{borderRadius:"0 0 50 0"}}>
        <img src="./src/Image/image.png" alt="Button Image" style={{ width: 53, height: 53,borderRadius: 10}} />
        </MenuItem>
        <Divider />
        <MenuItem sx={{borderRadius:"0 0 50 0"}}>
         <Stack direction="column">
            <Box sx={{width:36,height:36,bgcolor:"#0F1E56",borderRadius:'10px 10px 10px 10px',alignItems:"center",display:"flex",justifyContent:"center"}}>
                <ListAltIcon sx={{width:'16.36px',height:'14.73px'}}/>
            </Box>
            <Box sx={{width:36,height:36,justifyContent:"center",alignItems:"center",textAlign:"center",color:"#000000"}}>
            place
            </Box>
            
         </Stack>
        </MenuItem>
        <Divider />
      </MenuList>
  )
}

export default Bar