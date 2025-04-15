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

export default layout