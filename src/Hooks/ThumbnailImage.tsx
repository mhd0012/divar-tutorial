import React from "react";

// @ts-ignore
const ThumbnailImage = ({product}) => {
    return (
        <div className='thumbnail'>
            <img src={product.image} className='border' alt={product.title}/>
        </div>
    )
}


export default ThumbnailImage