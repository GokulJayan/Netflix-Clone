import React, {useEffect, useState} from 'react'
import './Cards.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants'

function Cards() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
        setMovies(response.data.results)
        })
    }, [])



    return (
        <div className="row">
            <h2>Originals</h2>
            <div className='cards'>
                {movies.map((obj)=>
                    <img className='card' alt='card' src={`${imageUrl+obj.backdrop_path}`}/>
                )}
            </div>
        </div>
    )
}

export default Cards
