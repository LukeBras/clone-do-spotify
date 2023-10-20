'use client'


import { Album } from "@/types/Album";
import { ReactNode, createContext, useContext, useState } from "react";

type AlbumContextType = {
    album:Album[];
    setAlbum:(album:Album[])=>void;
}

export const AlbumContex = createContext<AlbumContextType|null>(null);

export const AlbumProvider = ({children}:{children:ReactNode})=>{

    const [album,setAlbum] = useState<Album[]>([
        { 
        id:1,
        imgAlbum:'./assets/imgs/albumimg.jpg',
        nomeAlbum:'A Night At Opera',
        musics:['/assets/music/Precious Jerusalem.mp3'],
        nomeMusic:['Precious Jerusalem'],
        author:'Blind Guardian',
        },
        { 
            id:2,
            imgAlbum:'./assets/imgs/temple.jpg',
            nomeAlbum:'Temple of Shadows',
            musics:['Precious Jerusalem.mp3'],
            nomeMusic:['Precious Jerusalem'],
            author:'Angra',
        },
        
    ]);

    return(

        <AlbumContex.Provider value={{album,setAlbum}}>
            {children}
        </AlbumContex.Provider>
    )

}

export const useAlbum = ()=>useContext(AlbumContex);


