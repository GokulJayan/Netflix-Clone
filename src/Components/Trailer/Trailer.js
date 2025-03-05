import React from 'react'
import './Trailer.css'
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import { useState,useEffect } from 'react';

function Trailer() {
  const [videoId, setVideoId] = useState(null);
  const search = useLocation().search;
  const title = new URLSearchParams(search).get('title');
  const API_KEY="AIzaSyB6-wcQ_dkj0Jf7bfrQoZZeO4mI34qu2nI"
  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${title+' movie trailer'}&type=video&part=snippet&maxResults=1`)
      .then(response => response.json())
      .then(data => setVideoId(data.items[0].id.videoId))
      .catch(error => console.log(error));
  }, [title]);

  if (!videoId) {
    return <div>Loading...</div>;
  }

  const opts = {
    height: '600',
    width: '1280',
    playerVars: {
        autoplay: 1,
      },
  };

  return (
    <div>
      <div className='titleDiv'>
        
        <h1 className='trailerTitle'>{title}</h1>
        <img className='imgNet' src="/images/icon.png" />
      </div>
        <div className='videoDiv'>
            <YouTube videoId={videoId} opts={opts} />
        </div>
        
    </div>
  );
}

export default Trailer