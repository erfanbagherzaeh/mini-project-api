
import './App.css';
import Container from '@mui/material/Container';
import ButtonAppBar from './Components/componentNavbar/Navbar';
import MediaCard from './Components/componentCard/Card';
import { Grid } from '@mui/material'; 
import Tooltipp from './Components/componentTootip/Tooltip copy';

function App() {
  return (
   
    <div className="App">
      <ButtonAppBar />
      <Container className="containerr">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
            name="james"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img="https://images.pexels.com/photos/27914284/pexels-photo-27914284/free-photo-of-joven-apoyado-contra-una-pared-mirada-penetrante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
           name="mark"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img="https://images.pexels.com/photos/29154739/pexels-photo-29154739/free-photo-of-monochrome-portrait-of-man-fishing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
           name="deivid"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img="https://media.istockphoto.com/id/1264065968/photo/young-male-portraits-with-dark-hair-mullet-and-bright-blue-eyes.jpg?s=612x612&w=0&k=20&c=9SZUMH6PMfawUulJjLljE1g-uauFPHicCOPywe6ioGc="
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
           name="mickle"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img=" https://media.istockphoto.com/id/462595629/photo/gipsy.jpg?s=612x612&w=0&k=20&c=VeBIWcZdpvE1PrZ_O45tmezT7NaehtvFMQ842Xje6SI="
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
           name="bin"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img="https://images.pexels.com/photos/1161267/pexels-photo-1161267.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
           name="ava"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img="https://media.istockphoto.com/id/1284791000/photo/young-girl-model-outdoors-urban-style-fashionable-posing.jpg?s=612x612&w=0&k=20&c=1q1_c7egRqf6PgTZXOyGBdbfBa64sX2CY-xP9GxXcZ4="
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
           name="sam"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img=" https://images.pexels.com/photos/28115320/pexels-photo-28115320/free-photo-of-pexels-meet-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
           name="roya"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img=" https://media.istockphoto.com/id/1498377956/photo/young-urban-girl-posing-on-grid-wall.jpg?s=612x612&w=0&k=20&c=gCTYF18YUCKwFj9PPsKWXMVtqwKt_Z9PkqMqEtDidyY="
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
           name="deniz"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img="  https://images.pexels.com/photos/27914291/pexels-photo-27914291/free-photo-of-modelo-femenina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard 
           name="bela"
             description=" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica "
             img=" https://images.pexels.com/photos/27971185/pexels-photo-27971185/free-photo-of-modelo-femenina-en-san-jose.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
          </Grid>
        </Grid>
       
      </Container>
       <Tooltipp/>
    </div>
  );
}

export default App;
