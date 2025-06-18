"use client"
import React, { useState } from 'react'
import Link from 'next/link';

const Button = (
    {
    className="",
    children,
    href="", 
    stroke=false,
    white=false,
    none=false,
     ...props
    }
    ) => {


    const classname=`  ${className || " w-32 h-16 font-semibold lg:w-56 lg:h-20 lg:text-bold lg:font-bold"} ${stroke ? white? "bg-none text-white border border-white hover:bg-yellow-50 hover:text-black hover:border-black" :"bg-none text-c-primary border border-c-primary hover:bg-yellow-50 hover:text-black hover:border-black" : white ? "bg-c-light  text-c-primary hover:bg-grey-3 hover:text-c-black": "bg-c-primary  text-c-bg hover:bg-c-text hover:text-c-bg"} transition-all duration-300  active:bg-c-green `;

    if(href != null){
        return(
            <Link href={href} className={none ? className : classname+" flex flex-col justify-center text-center align-middle content-center"} {...props}>{children}</Link>
        )

    }
    else{
        return(
            <button className={none ? className : classname} {...props}>{children}</button>
        )
    }

}

export default Button