"use client"
import React, {useEffect, useState} from 'react'
import axios from "axios";
import itpro from '../../Hooks/itpro'
import IconDivar from '../../images/divar.svg'
import {DataProduct} from "@/DataTypes/SearchProduct";
import {URL_GET_PRODUCT_LIST} from "../../urls/urls";
import useSWR from "swr";
import Link from "next/link";
import ThumbnailImage from "@/Hooks/ThumbnailImage";


function Header() {
    console.log(IconDivar)
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);

    const {data, error} = useSWR(URL_GET_PRODUCT_LIST, async (url) => {
        const response = await axios.get(url)
        setProducts(response.data)
        return response.data
    })
    const productList: DataProduct[] = products


    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };


    const filteredProducts = productList.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className="absolute w-full bg-zinc-100 p-3">
            <header className='justify-between flex'>
                <div className="logo">
                    <img src={IconDivar.src} width='38px' alt=""/>
                </div>
                <nav>
                    <ul className='text-center flex flex-row '>
                        <li><a href="#" className='mr-5'>آگهی‌ها</a>
                            {/*<Icon>add_circle</Icon>*/}
                            {/*<Icon className='material-icons'>add_circle</Icon>*/}
                            {/*<Icon className='material-icons'>add_circle</Icon>*/}
                        </li>
                        <li><a href="/create-new-product" className='mr-5'>درج آگهی</a></li>
                        <li><a href="#" className='mr-5'>پشتیبانی</a></li>
                        <li><a href="#" className='mr-5'>ورود/ثبت‌نام</a></li>
                    </ul>
                </nav>
                <div className="search">
                    <form action="">
                        <input type="text" placeholder="... جست و جو " name='search' className='p-2 align-middle' dir=''
                               value={searchTerm} onChange={handleSearchChange}></input>
                        <button type="submit"
                                className='bg-red-700 ml-2  text-white p-2 inline-block align-middle rounded'>جستجو
                        </button>

                        {/* color sky button whit dashed 👇 */}

                        {/*<button type="submit"*/}
                        {/*        className=' ml-2 border-dashed border-2 border-sky-500 text-sky-500 bg-white p-2 inline-block align-middle rounded'>جستجو*/}
                        {/*</button>*/}

                    </form>
                </div>

            </header>

            {searchTerm !== '' ? (
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <div className="w-full" style={{position: "absolute"}}>
                        <div className='flex flex-row justify-center' style={{height: '1400px'}}>
                            {filteredProducts.splice(0, 5).map((product) => (

                                <div className='basis-1/6' style={{padding: '5px'}}>
                                    <Link href={`/${product.id}`} onClick={() => {
                                        setSearchTerm('')
                                    }}>
                                        <div className="border p-2 bg-white" style={{borderRadius: '5px'}}>
                                            <div className="">
                                                <div className="">
                                                    <ThumbnailImage product={product}/>
                                                </div>
                                                <div className="" style={{}}>
                                                    <h6 className="one-line-text ">
                                                        {product.title}
                                                    </h6>
                                                    <div className='text-dark-50'>
                                                        <div style={{direction: 'rtl'}}>
                                                            {itpro(product.price)}
                                                            <span> تومان </span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            ))}
                        </div>

                    </div>
                </div>
            ) : (
                <div></div>
            )}

        </div>
    )
}

export default Header