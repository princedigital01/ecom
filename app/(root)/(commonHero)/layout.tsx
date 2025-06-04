<<<<<<< HEAD
"use client"
import Hero2 from '@/components/Hero2'
import { usePathname } from "next/navigation";


const layout = ({children}:Readonly<{children:React.ReactNode}>) => {

  const pathname= usePathname();
  return (
    <div>
        <Hero2 className={""}> {pathname.slice(1)} </Hero2>
        {children}
    </div>
  )
}

=======
import React from 'react'
import Hero2 from '@/components/Hero2'

const layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div>
        <Hero2 className={"pt-20"}> title </Hero2>
        {children}
    </div>
  )
}

>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
export default layout