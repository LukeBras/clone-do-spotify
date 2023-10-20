import {ChevronLeft,ChevronRight,PlayCircle} from 'lucide-react'
import { AlbumItem } from './AlbumItem';
import { useAlbum } from '../context/AlbumContex';
import ReactAudioPlayer from 'react-audio-player';


export const Main = ()=>{

    const albumCtx = useAlbum();
    return(
        <main className="flex-1 p-6">
            <div className='flex  items-center gap-3'>
                <button className=' rounded-full bg-black/40 p-1'>
                    <ChevronLeft/>
                </button>
                <button className='rounded-full bg-black/40 p-1'>
                    <ChevronRight/>
                </button>
               
            </div>
            <h1 className='font-semibold text-3xl mt-10'>Bom Tarde!</h1>
            <div className='flex gap-3'>
                {albumCtx?.album.map((item)=>(
                    <AlbumItem id={item.id} imgAlbum={item.imgAlbum} nomeAlbum={item.nomeAlbum}  />
                ))}
                
            </div>

                {/* <ReactAudioPlayer
                src={albumCtx?.album[0].musics[0]}
                autoPlay
                controls
                /> */}
                    
        </main>
    )
}