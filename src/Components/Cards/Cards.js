import React, {useEffect, useState} from 'react'
import './Cards.css'
import axios from '../../axios'
import { API_KEY, imageUrl, API_KEY_2 } from '../../Constants/constants'
import { Link } from 'react-router-dom'

function Cards(props) {
    const [movies, setMovies] = useState([])
    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        axios.get(props.path).then((response)=>{
        setMovies(response.data.results)
        })
    }, [])

    const handleClick = (title) => {
        window.open(`https://www.youtube.com/results?search_query=${title} trailer`, '_blank');

        // fetch(
        //     `https://www.googleapis.com/youtube/v3/search?key=${API_KEY_2}&q=${title + " movie trailer"}&type=video&part=snippet&maxResults=1`
        //   )
        //   .then((response) => response.json())
        //   .then((data) => setVideoId(data.items[0].id.videoId))
        //   .catch((error) => console.log(error));
        
        // window.open(`https://www.youtube.com/watch?v=${videoId}`,"_blank");
    };


    return (
        <div className="row">
            <h3>{props.genre}</h3>
            <div className='cards'>
                {movies.map((obj)=>
                    <div className='cardDiv'>
                        {/* <Link style={{ textDecoration: 'none' }} className='trailerLink' to={obj && obj.title ? `/trailer?title=${obj.title}` : '/'} target="_blank"> */}
                        <img onClick={() => handleClick(obj.title)} className='card' alt='card' src={`${imageUrl+obj.backdrop_path}`}/>
                        <h6 onClick={() => handleClick(obj.title)} className='cardTitle'>{`${obj.title}`}</h6>
                        {/* </Link> */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cards
