import Hero2 from '@/components/Hero2'


const layout = ({children}:Readonly<{children:React.ReactNode}>) => {


  return (
    <div>
        <Hero2 className={""} />
        {children}
    </div>
  )
}

export default layout