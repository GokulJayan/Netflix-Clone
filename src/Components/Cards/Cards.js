import React, {useEffect, useState} from 'react'
import './Cards.css'
import { imageUrl } from '../../Constants/constants'
import { getMoviesByCategory } from '../../services/tmdb'

function Cards(props) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMoviesByCategory(props.path).then((response)=>{
        setMovies(response.data.results)
        })
    }, [props.path])

    const handleClick = (title) => {
        window.open(`https://www.youtube.com/results?search_query=${title} trailer`, '_blank');
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
