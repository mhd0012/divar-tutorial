import React from 'react';
import ImageNot from "../images/404-page-not-found.png";
import Link from "next/link";

const NotFound = () => {
    return (
        <div style={{width:'100%' , height:'100' , backgroundColor:'#1a2238'}}>
            <Link href='/'>
                <div className='flex justify-center align-middle' >
                    <img src={ImageNot.src}  alt=""/>
                </div>
            </Link>
        </div>
    );
};

export default NotFound;