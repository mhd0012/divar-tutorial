'use client'
import React, {useState} from 'react';
import useSWR from "swr";
import {URL_GET_PRODUCT_LIST} from "@/urls/urls";
import axios from "axios";
import ListItem from "@/components/tools/listItem";
import {DataProduct} from "@/DataTypes/ProductData";
import {Pagination} from "@mui/material";
import ListCategory from "@/components/categoryes/ListCategory";

function Content() {

    interface Data {
        results: Array<DataProduct>
        total_pages: number
        current_page: number
    }

    const [page, setPage] = useState(1);

    const fetchProduct = async (url: string) => {
        const response = await axios.get<Data>(url)
        return response.data
    }

    const {data} = useSWR(`${URL_GET_PRODUCT_LIST}?page=${page}`, fetchProduct)


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };


    return (
        <div className='pt-20'>


            <div className="flex">
                <div className="basis-9/12">

                    <div className="flex flex-row rtl flex-wrap">
                        {data?.results?.map((product: DataProduct, index: number) => (
                            <ListItem product={product} key={index}/>
                        ))}
                    </div>

                </div>
                <div className="basis-3/12" style={{borderLeft: '1px solid #eaeaea'}}>
                    دسته بندی ها
                    <div className="">
                        <ListCategory/>
                        {/*<li><ListMini /></li>*/}
                    </div>
                </div>
            </div>


            <div>
                <Pagination count={data?.total_pages} page={page} onChange={handleChange}/>
            </div>
        </div>

    );
}

export default Content;