import {Home,Search,Library} from 'lucide-react'
import { useAlbum } from '../context/AlbumContex';



export const Aside = ()=>{
    const albumCtx = useAlbum();
    return(
        <aside  className="w-72 p-6 bg-zinc-950 ">
            <nav className='space-y-6'>
                <a href="" className='flex items-center gap-3 cursor-pointer hover:text-white font-semibold text-zinc-200  '>
                        <Home/>
                        Home
                </a>
                <a href="" className='flex items-center  gap-3 cursor-pointer hover:text-white font-semibold text-zinc-200  '>
                        <Search/>
                        Busca
                </a>
                <a href="" className='flex items-center  gap-3 cursor-pointer hover:text-white font-semibold text-zinc-200  '>
                    <Library/>
                        Sua Biblioteca
                </a>
            </nav>

            <nav className='flex flex-col mt-10 pt-10 border-t border-zinc-600'>
                {albumCtx?.album.map((item)=>(
                    <div className='flex items-center cursor-pointer pt-2 pb-2 hover:bg-zinc-900' key={item.id}>
                        <img className='w-12 rounded-md mr-2' src={item.imgAlbum}  />
                        <div className='flex-col'>
                            <h1 className=''>{item.nomeAlbum}</h1>
                            <h2 className='text-[#9D9D9D]'>{item.author}</h2>
                        </div>
                    </div>
                ))} 
            </nav>
        </aside>
    ) 
}