"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { name, nav } from "@/constants";
import { usePathname } from "next/navigation";
import MenuBg from "@/components/design/MenuBg"
import * as icons from "@/assets/icons";
import { useCart } from "@/context/CartContext";



function search() {

}

function heart() {

}

function account() {

}



const Navbar = ({className}) => {
    const size = 40;
    const pathname = usePathname();
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const [openNav, setOpenNav] = useState(false);

    function toggleNav(){
        if(openNav){
            setOpenNav(false);
        }else{
            setOpenNav(true);
        }
    }
    return (
        <div className={`${className || ""} fixed w-full z-40 `}>
            
            <div className=" flex-row justify-between items-center p-4 hidden md:flex bg-c-bg gap-4">
                <Link href="/" className="flex flex-row items-center">
                    <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
                    <div className=" font-montserrat font-bold text-c-link text-2xl lg:text-3xl">
                        {name}
                    </div>
                </Link>
                <div className="flex lg:gap-20 gap-14 font-medium pl-24">
                    {nav.map((item) => (

                        <Link key={item.id} href={item.link} className={`${pathname === item.link ? "text-c-primary" : "  text-c-link"}  transition-all duration-300 hover:text-sm hover:text-c-text font-semibold`}>
                            {item.text}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-row gap-5 lg:gap-10 pr-4">

                    <button onClick={() => search}>
                        <icons.Search className="icon" size={size}/>
                    </button>

                    <button onClick={() => heart}>
                        <icons.Heart className="icon" size={size} />
                    </button>

                    <button className="relative">
                        <Link href={"/cart"}>
                        <span className="absolute -top-3 -left-3 bg-primary rounded-full w-6 h-6 text-sm text-center">{totalItems}</span>
                        <icons.ShoppingCart className="icon" size={size} />
                        </Link>
                    </button>

                    <button >
                        <icons.Account className="icon" size={size} />
                    </button>

                </div>
            </div>

            <div className="flex flex-row justify-between items-center p-2  md:hidden bg-c-bg">
                <Link href="/" className="flex flex-row items-center z-50">
                    <Image src="/images/logo.svg" width={20} height={20} alt="logo" />
                    <div className=" font-montserrat font-bold text-c-link text-sm">
                        {name}
                    </div>
                </Link>
                
                <div className={`${openNav ? "flex":"hidden" } z-40`}>
                    <div onClick={toggleNav} className="z-50 absolute flex justify-around flex-col left-0 top-0 items-center text-center align-middle content-center w-screen md:w-[50vw] h-[50vh] pt-10">
                        {nav.map((item) => (

                            <Link key={item.id} href={item.link} className={`${pathname === item.link ? "text-c-primary" : "  text-c-link"}  transition-all duration-300 hover:text-sm hover:text-c-text font-semibold w-1/2`}>
                                {item.text}
                            </Link>
                        ))}
                        
                        
                    </div>
                    <button onClick={toggleNav}  className=" z-50 rounded-full bg-c-active absolute left-[87%] md:left-[45%] top-[4%] p-0">
                            <icons.Cancel/>
                    </button>
                    <MenuBg/>
                </div>
                <div className="flex flex-row gap-2 ">

                    <button onClick={() => search} className="w-8 h-8">
                        <icons.Search className="icon" />
                    </button>

                    <button onClick={account} className="w-8 h-8">
                        <icons.Account className="icon" />
                    </button>

                    <button onClick={toggleNav} className="w-8 h-8 group">
                        <div className="flex flex-col gap-1">
                            <div className="w-5 h-0.5 bg-c-primary rounded-lg group-hover:bg-c-link"></div>
                            <div className="w-5 h-0.5 bg-c-primary rounded-lg group-hover:bg-c-link"></div>
                            <div className="w-5 h-0.5 bg-c-primary rounded-lg group-hover:bg-c-link"></div>
                        </div>
                    </button>

                </div>

                <div className="absolute flex flex-col right-[3%] top-[80vh] gap-2 p-5">
                    <button onClick={() => heart} className="w-8 h-8">
                        <icons.Heart className="icon2" />
                    </button>

                    <button className="w-8 h-8">
                        <span>{totalItems}</span>
                        <icons.ShoppingCart className="icon2 text-c-green" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar