import { useUserPlaylists } from '@/zustand/useUserPlaylists'
import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import {motion as m} from 'framer-motion'

const CloseContainer = ({isOpen}) => {
  const {playlists} = useUserPlaylists()
  const handleClick = (uri) => {
    window.open(uri, '_blank')
  }
  
  return (
    <div className={`${isOpen ? 'hidden' : 'flex flex-col'} items-center gap-3 select-none`}>
      {
        playlists ? playlists.map(el=> (
          <m.div key={el.id} whileInView={{opacity: [0,1], transition:{duration: 0.5, delay: 0.2}}}>
            <Tooltip placement='right' className='bg-zinc-800 ml-4 shadow-tooltip rounded-bl-none' key={el.id} content={
              <div className='flex flex-col gap-1 items-start'>
                <span className='text-white text-lg'>{el.name}</span>
                <span className='text-background/60 capitalize'> {el.type} • {el.owner.display_name}</span>
              </div>
            }>
              <Image onClick={() => handleClick(el.external_urls.spotify)} src={el.images[0].url} alt={el.name} key={el.id} className='hover:blur-sm transition-all ease-linear duration-250 rounded-md cursor-pointer' width={60} height={60} />
            </Tooltip>
            </m.div>
        )) : 'loding'
      }
    </div>
  )
}

export default CloseContainer