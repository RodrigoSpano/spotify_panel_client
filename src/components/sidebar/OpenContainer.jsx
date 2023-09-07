import { useUserPlaylists } from '@/zustand/useUserPlaylists'
import React from 'react'
import PlaylistCard from './PlaylistCard'

export const OpenContainer = ({isOpen}) => {
  const {playlists} = useUserPlaylists()
  return (
    <div className={`${isOpen ? 'flex flex-col' : 'hidden'} `}>
      {
        playlists.map(el => <PlaylistCard isOpen={isOpen} list={el} key={el.id} />)
      }
    </div>
  )
}