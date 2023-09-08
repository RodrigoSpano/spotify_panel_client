import Image from 'next/image'
import React from 'react'
import {motion as m} from 'framer-motion'
import usePlaylistHook from '@/customHook/usePlaylistHook'
import { useDisclosure } from '@nextui-org/react'
import PlaylistModal from './modal/PlaylistModal'

const PlaylistCard = ({list}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {handlePlaylistTracks} = usePlaylistHook()

  const handlePlaylistInfo = async () => {
    await handlePlaylistTracks(list.id)
    onOpen()
  }
  return (
    <m.div onClick={handlePlaylistInfo} whileInView={{opacity: [0,1], transition:{duration: 0.5, delay: 0.2}}} className='select-none flex gap-4 items-center justify-start hover:bg-background/10 cursor-pointer p-2 rounded-md'>
      <Image src={list.images[0].url} alt={list.name} key={list.id} className='transition-all ease-linear duration-250 rounded-md cursor-pointer' width={60} height={60} />
      <div >
        <h4 className='font-medium'>{list.name}</h4>
        <span className='capitalize text-background/60'>{list.type} • {list.owner.display_name}</span>
      </div>
    <PlaylistModal isOpen={isOpen} onOpenChange={onOpenChange} playlist={list} />
    </m.div>
  )
}

export default PlaylistCard