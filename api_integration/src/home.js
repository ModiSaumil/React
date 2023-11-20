import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=020b2c53ee6445c2bfb3c06f62077b22');
            result = await result.json();
            console.log("Saumil ", result)
            setData(result.articles);
        } catch (error) {
            console.warn("Error", error)
        }
    }

    return (
        <>

            <div>Home</div>
            {
                data?.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.author} [{new Date(item.publishedAt).toLocaleDateString()}] </p>
                    </div>
                ))
            }
        </>
    )
}
export default Home