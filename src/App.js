
import './App.css';
import Container from '@mui/material/Container';
import ButtonAppBar from './Components/componentNavbar/Navbar';
import MediaCard from './Components/componentCard/Card';
import { Grid } from '@mui/material'; 
import Tooltipp from './Components/componentTootip/Tooltip copy';
import { useEffect } from 'react';
import { useState} from 'react';
import axios from 'axios';
//  import React from 'react'



function App() {

  // const [articles , setArticles] = useState(0);

  // useEffect(() => { 
  //   axios
  //   .get("http://localhost:5000/articles")
  //   .then((response) => setArticles(response.data));
  // }, []);

  const [articles , setAtricles] = useState([])

  useEffect( ()=>{
      axios.get('http://localhost:5000/articles')
      .then( response => setAtricles(response.data))
  } , [])
  
  return (
   
    <div className="App">
      <ButtonAppBar />

      {/* {articles.map((articles) => (
           <Container className="containerr">
           <Grid container spacing={3}>
             <Grid item xs={12} sm={6} md={4} lg={3}>
             <MediaCard {...articles} />
             </Grid>
           </Grid>
         </Container>
      ))} */}
              {articles.map(article => (
                   
                     
                <MediaCard {...article}></MediaCard>
                 
            ))}

       <Tooltipp/>
    </div>
  );
}

export default App;
