import React from 'react';
import useSWR from 'swr'
import {URL_GET_CATEGORYES, URL_MAIM} from "@/urls/urls";
import axios from "axios";
import {CategoryesData} from "@/DataTypes/CategoryesData";

const ListCategory = () => {

    const fetchCategories = async (url:string) => {
        const response = await axios.get<CategoryesData[]>(url)
        return response.data
    }
    const {data} = useSWR<CategoryesData[]>(URL_GET_CATEGORYES , fetchCategories)
    return (
        <div>
            {data?.filter(cat => cat.parent === null).map(filteredCategory => (
                // <li>
                //     {filteredCategory.parent === null ? (
                //         <div>{filteredCategory.title}</div>
                //     ) : (
                //         <div></div>
                //     )}
                //
                // </li>
                <div style={{ borderBottom:'1px solid #eaeaea'  }} className='cursor-pointer flex rtl py-2 items-center'>
                    <span className='ml-2'>
                        <img src={`${URL_MAIM}${filteredCategory.image}`} style={{width: '30px'}} alt=""/>
                    </span>
                    <p className='pb-0 mb-0 font-medium'>
                        {filteredCategory.title}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ListCategory;