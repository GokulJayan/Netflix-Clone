import React from 'react'
import './Trailer.css'
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import { useState,useEffect } from 'react';
import { getTrailerVideoId } from '../../services/youtube';

function Trailer() {
  const [videoId, setVideoId] = useState(null);
  const search = useLocation().search;
  const title = new URLSearchParams(search).get('title');
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const id = await getTrailerVideoId(`${title} movie trailer`);
        setVideoId(id);
      } catch (error) {
        console.log(error);
      }
    };
    if (title) fetchVideo();
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
        <img className='imgNet' src="/images/icon.png" alt="Netflix icon" />
      </div>
        <div className='videoDiv'>
            <YouTube videoId={videoId} opts={opts} />
        </div>
        
    </div>
  );
}

export default Trailer