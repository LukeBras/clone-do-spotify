'use client'


import { AlbumProvider } from "./context/AlbumContex";
import { Footer } from "./components/Footer";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";

const Page = ()=>{
  return(
    <div className="h-screen flex flex-col">
      <AlbumProvider>
        <div className="flex flex-1">
          <Aside/>
          <Main/>
        </div>
         <Footer/>
      </AlbumProvider>
    </div>
  )
}

export default Page;