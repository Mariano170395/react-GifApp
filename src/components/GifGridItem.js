import React from 'react'

const GifGridItem = (img) => { //aqui antes iba img

    console.log(img)

    return (
        <div  className="card">
            <img src={img.url} alt={img.title}></img>
            <p>{img.title}</p>
            {/* {img.title} */}
        </div>
    )
}

export default GifGridItem
