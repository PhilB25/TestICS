import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Stack } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Cardmb({data}) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="87"
          image={data.profile_image_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                <Stack direction="row">
                <CalendarMonthIcon/>
                {data.operation_time[0].time_open} - {data.operation_time[0].time_close}
                </Stack>
                <ImageList sx={{  width: "100%",
    height: 176,
    overflowX: "auto", 
    scrollSnapType: "y mandatory", 
    scrollbarWidth: "none", 
    msOverflowStyle: "none", 
    "&::-webkit-scrollbar": {
      display: "none" 
    } }} cols={1}>
      {data.images.map((item) => (
        <ImageListItem key={item}>
          <img
            srcSet={`${item}`}
            src={`${item}`}
            loading="lazy"
            style={{ width: "100%", height: 176,border:"10px 10px 10px 10px"}}
          />
        </ImageListItem>
      ))}
    </ImageList>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Cardmb