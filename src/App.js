import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Cards from './Components/Cards/Cards';
import Login from './Components/Login/Login'
import Trailer from './Components/Trailer/Trailer';
import {Route,Routes} from 'react-router-dom'
import { API_KEY, imageUrl } from './Constants/constants'



function App() {
  return (
    <Routes>
      
      <Route path='/' element={ <div>
        <NavBar/> 
        <Banner/>
        <Cards genre='Comedy' path={`discover/movie?api_key=${API_KEY}&with_genres=35`}/>
        <Cards genre='Horror' path={`discover/movie?api_key=${API_KEY}&with_genres=27`}/>
        <Cards genre='Action' path={`discover/movie?api_key=${API_KEY}&with_genres=28`}/>
        <Cards genre='War' path={`discover/movie?api_key=${API_KEY}&with_genres=10752`}/>
        <Cards genre='Western' path={`discover/movie?api_key=${API_KEY}&with_genres=37`}/>
      </div>}/>

      <Route path='/login' element={<Login/>}/>     
        
      <Route path='/trailer' element={<Trailer/>}/>
    </Routes>
  );
}

export default App;