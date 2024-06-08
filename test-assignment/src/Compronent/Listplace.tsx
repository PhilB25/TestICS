
import { Box, Button, Grid, Stack,Pagination,Divider} from '@mui/material';
import { useState, useEffect } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CircleIcon from '@mui/icons-material/Circle';
import '/src/CSS/TextStyle.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function Listplace() {
    interface Data {
        id: number;
        name: string;
        categories:string[];
        profile_image_url:string;
        images:string[];
        operation_time:string[];
        address:string;
        rating:number;
      }
      const options = ["restaurant", "cafe", "bakery"];
      const [data, setData] = useState<Data[]>([]);
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 9; 
      const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
    
      const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
      };
      const [selectedCategory, setSelectedCategory] = useState(null);

      const handleChangeoption = (event, newValue) => {
        setSelectedCategory(newValue);
      };
    
      const filteredItems = selectedCategory ? data.filter(item => item.categories.includes(selectedCategory)) : data;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const filteredData = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const currentItems = filteredData.slice(startIndex, endIndex);
     
    
    useEffect(() => {
        // อ่านข้อมูลจากไฟล์ JSON
        fetch('./src/DataSet/example_data.json')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
          console.log(data[0])
      }, []);
  return (
    <Stack spacing={1}>
        <Stack direction="row" sx={{justifyContent:"space-between"}}>
            <Box sx={{fontSize:48 ,color:"#000000"}}>Place</Box>
            <Box sx={{display:"flex"}}>
            <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 185,height:5 }}
        renderInput={(params) => <TextField {...params} />}
        onChange={handleChangeoption}
      />
      <Divider />
      |
      <TextField
          id="outlined-multiline-flexible"
          label="Sreach"
          onChange={handleSearchChange}
          sx={{width:400,height:40,borderRadius:"10 10 10 10"}}
        />
            </Box>
            
        </Stack>
        <Grid container spacing={2} >
        {currentItems.map(item => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
           <Button sx={{width:"100%",height:225, borderRadius:'20px 20px 20px 20px',bgcolor:"#FFFFFF",boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',}}>
            <Stack direction="column">
            <Stack direction="row" gap={2}>
            <img src={item.profile_image_url} alt="Button Image" style={{ width: 53, height: 53,borderRadius: 10}} />
            <Stack direction="column">
            <Box sx={{color:"#000000",fontSize:20}}>{item.name}</Box>
            <Stack direction="row"  justifyContent="space-between">
            <Box sx={{color:"#000000",fontSize:15,width:"100%"}} >
                <Stack direction="row">
                <CalendarMonthIcon/>
                {item.operation_time[0].time_open} - {item.operation_time[0].time_close}
                </Stack>
                </Box> 
            <Box sx={{color:"#134B8A",fontSize:15}} >
            <Stack direction="row">
                <CircleIcon/>
                {item.rating}
                </Stack>
                </Box> 
            </Stack>
            </Stack>
            
            </Stack>
            <ImageList sx={{ width: "100%", height: 120 }} cols={3}>
      {item.images.map((item) => (
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
           </Grid>
          
        ))}
        <Box sx={{width:"100%",marginTop:10,justifyContent:"center",left:600}}>
        <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        color="primary"
      /> 
        </Box>
        </Grid>
        
        
    </Stack>
    
  )
}

export default Listplace