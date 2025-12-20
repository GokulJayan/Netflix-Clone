import React, { useEffect, useState } from "react";
import { imageUrl } from "../../Constants/constants";
import "./Banner.css";
import { getTrendingMovies } from "../../services/tmdb";
import { getTrailerVideoId } from "../../services/youtube";

function Banner() {
  const [movie, setMovie] = useState();
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getRandomMovie = (movies) => {
    if (movies.length === 0) return null;
    let i = movies.length - 1;
    let j = Math.floor(Math.random() * (i + 1));
    while (typeof movies[j].title === "undefined") {
      j = Math.floor(Math.random() * (i + 1));
    }
    return movies[j];
  };

  useEffect(() => {
    getTrendingMovies()
      .then((response) => {
        const movies = response.data.results;
        setTrendingMovies(movies);
        setMovie(getRandomMovie(movies));
      });
  }, []);

  useEffect(() => {
    if (trendingMovies.length === 0) return;
    const interval = setInterval(() => {
      setMovie(getRandomMovie(trendingMovies));
    }, 5000);
    return () => clearInterval(interval);
  }, [trendingMovies]);

  const handleClick = async () => {
    if (!movie) return;
    try {
      const videoId = await getTrailerVideoId(`${movie.title} movie trailer`);
      if (videoId) {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : " "}</h1>

        <div className="banner_buttons">
          <button onClick={handleClick} className="button">
            Play
          </button>
          <button className="button">Mylist</button>
        </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
