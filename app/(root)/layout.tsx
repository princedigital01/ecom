"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { HeroUIProvider } from "@heroui/react";

export default function layout({children}: Readonly<{children:React.ReactNode}>) {


    return (
      <div>
        
        <HeroUIProvider>
        <Navbar className={""}/>
        <div className="pb-12 lg:pb-24"></div>
        {children}
        <Footer />
        </HeroUIProvider>
      </div>
    );
  }
  
