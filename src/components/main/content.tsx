'use client'
import React, {useState} from 'react';
import useSWR from "swr";
import {URL_GET_PRODUCT_LIST} from "@/urls/urls";
import axios from "axios";
import ListItem from "@/components/tools/listItem";
import {DataProduct} from "@/DataTypes/ProductData";

function Content() {

    const {data} = useSWR(URL_GET_PRODUCT_LIST, async (url) => {
        const response = await axios.get(url)
        return response.data
    })



    return (
        <div className='pt-20'>


            <div className="flex">
                <div className="basis-9/12">

                        <div className="flex flex-row rtl flex-wrap">
                            {data?.map((product:DataProduct, index:number) => (
                                <ListItem product={product} key={index}/>
                            ))}
                        </div>

                </div>
                <div className="basis-3/12" style={{borderLeft: '1px solid #eaeaea'}}>
                    دسته بندی ها
                    <div className="">
                        {/*<ListCategory categoryes={categoryes}/>*/}
                        {/*<li><ListMini /></li>*/}
                    </div>
                </div>
            </div>




        </div>

    );
}

export default Content;