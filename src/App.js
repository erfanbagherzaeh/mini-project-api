
import './App.css';
import ButtonAppBar from './Components/componentNavbar/Navbar';
import MediaCard from './Components/componentCard/Card';
import { Grid } from '@mui/material';
import Tooltipp from './Components/componentTootip/Tooltip';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [articles, setAtricles] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/articles')
      .then(response => setAtricles(response.data))
  }, [])

  return (

    <div className="App">
      <ButtonAppBar />
      <Tooltipp />
      {articles.map(article => (
        <MediaCard {...article}></MediaCard>
      ))}

    </div>
  );
}

export default App;
