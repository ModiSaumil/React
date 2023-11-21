import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Movies = () => {

    const [movie, setMovies] = useState([])

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        let url = await axios.get("https://streaming-availability.p.rapidapi.com/countries", {
            "headers": {
                "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
                "x-rapidapi-key": "2a1c7f70c0mshf461bcd527c2a3dp150878jsn70c8cef42c75"
            }
        });
        setMovies(url.data)
        console.log("movies", url.data)

    }

    return (
        <>
            <div>Movies</div>
            {/* {
                movie?.map((item, index) => {
                    <div key={index}>
                        <h2>{item.countryCode}</h2>
                    </div>
                }
                )} */}
            {movie?.map((item, index) => {
                <p>{item.movie.result.ae?.name}</p>
            })}
        </>
    )
}

export default Movies



{/* 
(
        <p>{movie.result.ae?.name}</p> 
        
        )
    */}