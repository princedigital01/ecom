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

export default layout