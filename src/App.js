import React, { useState } from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import Login from './Components/Login/Login'
import Trailer from './Components/Trailer/Trailer';
import {Route,Routes} from 'react-router-dom'
import { TMDB_API_KEY} from './Constants/constants'
import { LoadingContext } from './Contexts/LoadingContext';



function App() {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <Loader />
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <NavBar />
              <Banner />
              <Cards genre='Action' path={`discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`} />
              <Cards genre='Comedy' path={`discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`} />
              <Cards genre='Fantasy' path={`discover/movie?api_key=${TMDB_API_KEY}&with_genres=14`} />
              <Cards genre='Horror' path={`discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`} />
              <Cards genre='War' path={`discover/movie?api_key=${TMDB_API_KEY}&with_genres=10752`} />
              <Cards genre='Western' path={`discover/movie?api_key=${TMDB_API_KEY}&with_genres=37`} />
              <Footer />
            </div>
          }
        />

        <Route path='/login' element={<Login />} />
        <Route path='/trailer' element={<Trailer />} />
      </Routes>
    </LoadingContext.Provider>
  );
}

export default App;