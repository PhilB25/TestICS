
import { Box,  Grid, Stack,Pagination} from '@mui/material';
import { useState, useEffect } from 'react'
import '/src/CSS/TextStyle.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useMediaQuery } from '@mui/material';
import Carddt from './Carddt.tsx';
import Cardmb from './Cardmb.tsx';

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
      const isScreenSmall = useMediaQuery('(max-width:480px)');
      const directionType: string = isScreenSmall ? "column" : "row";
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
      }, []);
  return (
    <Stack spacing={1}>
        <Stack direction={`${directionType}`} sx={{justifyContent:"space-between"}}>
            <Box sx={{fontSize:36 ,color:"#000000"}}>Place List</Box>
            {!isScreenSmall && (
  <Box sx={{display:"flex", gap:2}}>
  <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options}
              sx={{ width:185 }}
              renderInput={(params) => <TextField {...params} />}
              onChange={handleChangeoption}
              /> 
              <TextField
              id="outlined-multiline-flexible"
              label="Sreach"
              onChange={handleSearchChange}
              sx={{width:400,height:40,right:10}}
              />
                </Box>)}
                {isScreenSmall && (
                <Box sx={{display:"flow"}}>
                <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options}
              sx={{ width:"100%" }}
              renderInput={(params) => <TextField {...params} />}
              onChange={handleChangeoption}
              /> 
              <TextField
              id="outlined-multiline-flexible"
              label="Sreach"
              onChange={handleSearchChange}
              sx={{width:"100%",height:40,borderRadius:"10 10 10 10"}}
              />
                </Box>)}
                          
        
        </Stack>
        <Grid container spacing={2} >
        {currentItems.map(item => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          {isScreenSmall&&(<Cardmb data={item}/>)}
          {!isScreenSmall&&(<Carddt data={item}/>)}
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