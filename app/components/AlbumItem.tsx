import { useAlbum } from '../context/AlbumContex';
import {Play} from 'lucide-react'

type AlbumItemProps = {
    id:number,
    nomeAlbum:string,
    imgAlbum:string
}

export const AlbumItem = ({id,imgAlbum,nomeAlbum,}:AlbumItemProps)=>{
    return(
        <div key={id} className="w-[500px] cursor-pointer hover:bg-zinc-700 transition-all mt-9 p-2  flex items-center rounded-md bg-[#2E2E2E]">
            <div className='flex items-center justify-between  w-full'>
                <img className='w-[100px] mr-5  rounded-md' src={imgAlbum} alt="" />
                <h1 className='font-semibold text-xl'>{nomeAlbum}</h1>
                <button className='bg-green-400 flex justify-center p-2 rounded-full ml-auto mr-8'>
                  <Play color='black' />
                </button>
              
            </div>
            
        </div>
    )
}