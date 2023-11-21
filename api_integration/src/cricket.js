import React, { useEffect, useState } from 'react'

const Cricket = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        try {
            let response = await fetch('https://cricket-live-data.p.rapidapi.com/results', {
                headers: {
                    'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
                    'X-RapidAPI-Key': '06d67c0f5amsha4c0db4092293e5p12276cjsn07b50eb28666'
                }
            });
            if (response.ok) {
                response = await response.json()
                console.log("DATA", response)
                setData(response.results);
            } else {
                throw new Error('Something went wrong while fetching the data!')
            }
        } catch (error) {

        }
    }

    return (
        <>
            <h1>Cricket</h1>
            {
                data.map((item, index) => (

                    <div key={index}>
                        <p style={{color:'blue'}}>{item.match_subtitle} - {item.venue}</p>
                        <h4>{item.home.name} VS {item.away.name}</h4>
                        <p style={{color:'red'}}>Status : {item.result}</p>
                        <p>===========================================================================================================================================================================</p>
                    </div>
                ))
            }
        </>
    )
}

export default Cricket