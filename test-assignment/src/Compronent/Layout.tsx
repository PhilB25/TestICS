
import AppBar from '@mui/material/AppBar';
import AccountButton from './AccountButton';
import {Stack,Box} from '@mui/material';
import Notification from './Notification';
import Bar from './Bar';
import Listplace from './Listplace';
import { useMediaQuery } from '@mui/material';
function Layout() {
  const isScreenSmall = useMediaQuery('(max-width:480px)');
  const marginValue: number = isScreenSmall ? 10 : 112;
  return (
  <AppBar position="static" sx={{ bgcolor: "#134B8A", height: 60, position: 'relative',justifyContent:"center"}}>
    {isScreenSmall && (
      <Box sx={{justifyContent:"start"}}>
        <img src="./src/Image/image.png" alt="Button Image" style={{ width: 50, height: 50,borderRadius: 10,marginLeft:9}} />
      </Box>
     )}
  <Box sx={{ position: 'absolute', top: 0, left: 0, width: "100%", height: 60,display: "flex", alignItems: "center",justifyContent:"flex-end"}}>
  <Stack spacing={2} direction="row">
  {!isScreenSmall && (
    <Notification />)}
    <AccountButton /> 
      </Stack>
  </Box>
  {!isScreenSmall && (
  <Box sx={{ position: 'absolute', top: 0, left: 0, bgcolor: "#FFFFFF", width: 90, height: 1456,borderRadius: '0 50px 50px 0 ' ,boxShadow:"inherit"}}>
    <Bar/>
  </Box>)}
  <Box sx={{ position: 'absolute', top: 88, left: marginValue,right:10,  height:1456}}>
    <Listplace/>
  </Box>
</AppBar>
       
  )
}

export default Layout