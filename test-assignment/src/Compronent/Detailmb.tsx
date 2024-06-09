import React from 'react';
import { Box, Button, Stack,ButtonGroup } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from 'react'

function Detailmb() {
    const data ={
        "id": 9842,
        "name": "Bistro Bazaar",
        "categories": [
            "restaurant"
        ],
        "profile_image_url": "https://images.unsplash.com/photo-1587174147003-eb7dc051122b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxzaG9wJTIwcmVzdGF1cmFudCUyMGJyZWFkfGVufDB8fHx8MTY0NjM2Nzg3Mg&ixlib=rb-1.2.1&q=80&w=1080",
        "images": [
            "https://images.unsplash.com/photo-1588280991458-d759882787cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080"
        ],
        "operation_time": [
            {
                "day": "Monday",
                "time_open": "9:00",
                "time_close": "20:00"
            },
            {
                "day": "Tuesday",
                "time_open": "9:00",
                "time_close": "20:00"
            },
            {
                "day": "Wednesday",
                "time_open": "9:00",
                "time_close": "20:00"
            },
            {
                "day": "Thursday",
                "time_open": "9:00",
                "time_close": "20:00"
            },
            {
                "day": "Friday",
                "time_open": "9:00",
                "time_close": "20:00"
            },
            {
                "day": "Saturday",
                "time_open": "closed",
                "time_close": "closed"
            },
            {
                "day": "Sunday",
                "time_open": "closed",
                "time_close": "closed"
            }
        ],
        "address": "180 Soi Sensuk Phrachasongkro Din Daeng Din Daeng, Bangkok",
        "rating": 4.1
    }
    const [isImage, setisImage] = useState(false);
    const [informationVariant, setinformationVariant] = useState("contained");
    const [imageVariant, setimageVariant] = useState("text");
    const handleClickInformation = (event: React.MouseEvent<HTMLElement>) => {
        setisImage(false);
        setinformationVariant("contained");
        setimageVariant("text");
      };
      const handleClickImage = (event: React.MouseEvent<HTMLElement>) => {
        setisImage(true);
        setinformationVariant("text");
        setimageVariant("contained");
      };
  return (
    <Stack direction="column" sx={{width:"100%"}} spacing={1}>
        <Button sx={{bgcolor:"#134B8A",borderRadius:"20px 20px 20px 20px",width:90}}>
            <Stack direction="row">
                <ArrowBackIosNewIcon />
                BACK
            </Stack>
        </Button>
        <Box  sx={{width:"100%" ,borderRadius:"30px 30px 30px 30px",boxShadow:"inherit",display:"flex"}}>
  <Button onClick={handleClickInformation} sx={{width:"100%",borderRadius:"30px 30px 30px 30px"}} variant={informationVariant}>Information</Button>
  <Button onClick={handleClickImage} sx={{width:"100%",borderRadius:"30px 30px 30px 30px" }} variant={imageVariant}>Image</Button>
</Box>
        {!isImage&&(<Card sx={{ width:"100%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="380.44"
          image={data.profile_image_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.name}
          </Typography>
          <Typography variant="body2" color="#000000" >
          <Stack direction="row" sx={{justifyContent:"stretch"}}>
                <Box>Address :</Box>
                <Box>{data.address}</Box>
                
                </Stack>
                <Stack direction="row" >
                <Box>Openinh House : </Box>
                <Stack direction="column">
                {data.operation_time.map((item) => (
        <Box>{item.day} : {item.time_open} - {item.time_close}</Box>
      ))}
                </Stack>
                </Stack>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>)}
                        {isImage&&(<Box sx={{bgcolor:"#FFFFFF", width:"100%",borderRadius:"10px 10px 10px 10px"}} >
                            <Box sx={{fontSize:38 , color:"#000000"}}>
                                Image
                            </Box>
                        <ImageList sx={{  width: "100%",
                        borderRadius:"10px 10px 10px 10px",
    height: 1084,
    overflowX: "auto", 
    scrollSnapType: "x mandatory", 
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
            style={{ width: "100%", height: 318,border:"10px 10px 10px 10px"}}
          />
        </ImageListItem>
      ))}
    </ImageList>
                        </Box>)}
        
    </Stack>
  )
}

export default Detailmb