"use client"
import React, {useState} from 'react'
import axios from "axios";
import itpro from '../../Hooks/itpro'
import IconDivar from '../../images/divar.svg'
import {URL_GET_PRODUCT_LIST} from "../../urls/urls";
import useSWR from "swr";
import Link from "next/link";
import ThumbnailImage from "@/Hooks/ThumbnailImage";
import {DataProduct} from "@/DataTypes/ProductData";


function Header() {
    const [searchTerm, setSearchTerm] = useState("");

    const {data}= useSWR(URL_GET_PRODUCT_LIST, async (url) => {
        const response = await axios.get(url)
        return response.data
    })


    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };


    const filteredProducts = data?.filter((product:DataProduct) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <div className="w-full bg-zinc-100 p-2 fixed">
            <header className='justify-center flex-row flex align-middle '>
                <div className="logo basis-3/12 inline-block align-middle">
                    <img src={IconDivar.src} width='38px' alt=""/>
                </div>
                <nav className='mt-2 basis-6/12 flex justify-center'>
                    <ul className='text-center flex flex-row '>
                        <li><a href="#" className='mr-5'>آگهی‌ها</a></li>
                        <li><a href="/create-new-product" className='mr-5'>درج آگهی</a></li>
                        <li><a href="#" className='mr-5'>پشتیبانی</a></li>
                        <li><a href="#" className='mr-5'>ورود/ثبت‌نام</a></li>
                    </ul>
                </nav>
                <div className="search basis-3/12">
                    <form action="">
                        <input type="text" placeholder="... جست و جو " name='search' className='p-2 align-middle' dir=''
                               value={searchTerm} onChange={handleSearchChange}></input>
                        <button type="submit"
                                className='bg-red-700 ml-2 shadow-md shadow-red-700/50  text-white p-2 inline-block align-middle rounded'>جستجو
                        </button>

                        {/* color sky button whit dashed 👇 */}

                        {/*<button type="submit"*/}
                        {/*        className=' ml-2 border-dashed border-2 border-sky-500 text-sky-500 bg-white p-2 inline-block align-middle rounded'>جستجو*/}
                        {/*</button>*/}

                    </form>
                </div>

            </header>

            {searchTerm !== '' && (
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <div className="w-full" style={{position: "absolute"}}>
                        <div className='flex flex-row justify-center bg-zinc-600/50' style={{height: '1400px'}}>
                            {filteredProducts.splice(0, 5).map((product:DataProduct) => (

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
            )}

        </div>
    )
}

export default Header