import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl, API_KEY_2 } from "../../Constants/constants";
import "./Banner.css";
import axios from "../../axios";

function Banner() {
  const [movie, setMovie] = useState();
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          let i = response.data.results.length - 1;
          let j = Math.floor(Math.random() * (i + 1));
          while (typeof response.data.results[j].title === "undefined") {
            j = Math.floor(Math.random() * (i + 1));
          }
          setMovie(response.data.results[j]);

          fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY_2}&q=${
              response.data.results[j].title + " movie trailer"
            }&type=video&part=snippet&maxResults=1`
          )
            .then((response) => response.json())
            .then((data) => setVideoId(data.items[0].id.videoId))
            .catch((error) => console.log(error));
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
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
