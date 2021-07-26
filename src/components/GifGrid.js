import React, { useState,   useEffect } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    // const [Count, setCount] = useState(0)

    useEffect(()=>{
        getGifs()
    },[])


    // useEffect(()=>{
    //     getGifs()
    // },[])  //Le estoy diciendo que solo quiero que se ejecute getGifs cuando se renderiza por primera vez

    const getGifs = async() =>{
        
        const url = `https://api.giphy.com/v1/gifs/search?api_key=HsU7ROwrMSi5ef5Z3WlIcsn8f90o73tB&q=${ encodeURI( category )}&limit=10`
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();

        const gifs = data.map(img=>{
            return{
                id:img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })


        // console.log({data}) //debido a que solo me interesa la data
        // console.log({data})
        // console.log(gifs)
        setImages(gifs)
    }

    // getGifs();
    


    return (
        <div>
            <h3>{category}</h3>
        <div className="Card-grid">
            
           
                {
                    images.map(img=>(
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }
            
            {/* <h2>{Count}</h2>
            <button onClick={()=>setCount(Count+1)}></button>  */}
        </div>
        </div>
    )
}

export default GifGrid
