import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            let i= response.data.results.length-1;
            const j= Math.floor(Math.random() * (i + 1));
            setMovie(response.data.results[j])
        })
    }, [])


    return (
        <div 
        style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} 
        className='banner'>
            
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
            
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>Mylist</button>
                </div>
            </div>
            <div className="fade_bottom">

            </div>

        </div>
    )
}

export default Banner
