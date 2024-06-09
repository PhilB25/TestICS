
import { Box, Button,Stack,} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CircleIcon from '@mui/icons-material/Circle';
function Carddt({data}) {
    
  return (
    <Button sx={{width:"100%",height:225, borderRadius:'20px 20px 20px 20px',bgcolor:"#FFFFFF",boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',right:25}}>
            <Stack direction="column">
            <Stack direction="row" gap={2}>
            <img src={data.profile_image_url} alt="Button Image" style={{ width: 53, height: 53,borderRadius: 10}} />
            <Stack direction="column">
            <Box sx={{color:"#000000",fontSize:20}}>{data.name}</Box>
            <Stack direction="row"  justifyContent="space-between">
            <Box sx={{color:"#000000",fontSize:15,width:"100%"}} >
                <Stack direction="row">
                <CalendarMonthIcon/>
                {data.operation_time[0].time_open} - {data.operation_time[0].time_close}
                </Stack>
                </Box> 
            <Box sx={{color:"#134B8A",fontSize:15}} >
            <Stack direction="row">
                <CircleIcon/>
                {data.rating}
                </Stack>
                </Box> 
            </Stack>
            </Stack>
            
            </Stack>
            <ImageList sx={{ width: "100%", height: 120 }} cols={3}>
      {data.images.map((item) => (
        <ImageListItem key={item}>
          <img
            srcSet={`${item}`}
            src={`${item}`}
            loading="lazy"
            style={{ width: "100%", height: 120}}
          />
        </ImageListItem>
      ))}
    </ImageList>
            </Stack>
           </Button> 
  )
}

export default Carddt