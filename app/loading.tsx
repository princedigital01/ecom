import Image from "next/image"

const loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row gap-4 justify-center text-center align-middle content-center">
      <Image width={100} height={100} alt={"loading"} src="/images/logo.svg" className="transition-all animate-spin"/>
    </div>
  )
}

export default loading