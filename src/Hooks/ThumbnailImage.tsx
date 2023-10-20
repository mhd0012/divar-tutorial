import React from "react";
import {DataProduct} from "@/DataTypes/ProductData";
import {URL_MAIM} from "@/urls/urls";

const ThumbnailImage = ({product}:{product:DataProduct}) => {
    return (
        <div className='thumbnail'>
            <img src={URL_MAIM+product.image} className='border' alt={product.image}/>
        </div>
    )
}


export default ThumbnailImage