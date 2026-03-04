import React, { useEffect, useState, useContext } from 'react'
import './Cards.css'
import { imageUrl } from '../../Constants/constants'
import { getMoviesByCategory } from '../../Services/tmdb'
import { getTrailerVideoId } from '../../Services/youtube'
import { LoadingContext } from '../../Contexts/LoadingContext'

function Cards({ path, genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesByCategory(path).then((response) => {
      setMovies(response.data.results || []);
    });
  }, [path]);

  const { setLoading } = useContext(LoadingContext);

  const handleClick = async (movie) => {
    if (!movie) return;

    const title = movie.title || movie.name;
    if (!title) return;

    setLoading(true);
    try {
      const videoId = await getTrailerVideoId(`${title} movie trailer`);
      if (videoId) {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row">
      <h3>{genre}</h3>
      <div className="cards">
        {movies.map((movie) => {
          const title = movie.title || movie.name;

          return (
            movie.backdrop_path && (
              <div className="cardDiv" key={movie.id}>
                <img
                  onClick={() => handleClick(movie)}
                  className="card"
                  alt={title}
                  src={imageUrl + movie.backdrop_path}
                />
                <h6
                  onClick={() => handleClick(movie)}
                  className="cardTitle"
                >
                  {title}
                </h6>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
