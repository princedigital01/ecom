<<<<<<< HEAD
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
  
=======
"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { HeroUIProvider } from "@heroui/react";

export default function layout({children}: Readonly<{children:React.ReactNode}>) {


    return (
      <div>
        <HeroUIProvider>
        <Navbar className={""}/>
        <div className="pb-24"></div>
        {children}
        <Footer />
        </HeroUIProvider>
      </div>
    );
  }
  
>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
