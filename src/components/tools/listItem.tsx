import React from 'react'
import Link from "next/link";
import ThumbnailImage from "@/Hooks/ThumbnailImage";
import itpro from "@/Hooks/itpro";
import {DataProduct} from "@/DataTypes/ProductData";



const ListItem = ({product}:{product:DataProduct}) => {
    return (

        <div className='basis-4/12 ltr p-1.5'>
            <Link href={`/${product.id}`}>
                <div className="border p-2 rounded-md" >
                    <div className="flex flex-row" >
                        <div className="basis-6/12">
                            <ThumbnailImage product={product}/>
                        </div>
                        <div className="basis-6/12 flex align-super flex-col justify-between" >
                            <p className='tow-line-text text-dark text-base pl-1 font-medium'>
                                {product.title}
                            </p>
                            <div className='text-zinc-700' >
                                <div className="">
                                    {product.situation}
                                </div>
                                <div className="rtl">
                                    {itpro(product.price)}
                                    <span> تومان </span>
                                </div>
                                <p className='one-line-text pb-0 mb-0'>
                                    {product.description}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}


export default ListItem