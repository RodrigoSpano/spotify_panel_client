import Image from 'next/image'
import React from 'react'
import {motion as m} from 'framer-motion'
import {HiExternalLink} from 'react-icons/hi'


const TrackCard = ({track, position}) => {

  const handleRedirectToSong = () => {
    window.open(track.external_url, '_blank')
  }
  return (
    <m.div onClick={handleRedirectToSong} whileHover={{scale:0.9}} className='flex gap-3 transition-all ease-linear duration-250 items-center justify-start cursor-pointer h-[60px] w-full rounded-md hover:bg-background/10 px-2'>
      <span className='font-bold text-strong-green'>{position}</span>
      <Image src={track.album.images[0].url} alt='album picture' width={50} height={50} className='rounded-md' />
      <div>
        <div className='flex items-center gap-2'>
          <p>{track.name}</p>
          <span ><HiExternalLink /></span>
        </div>
        <div className='text-xs text-white/70 gap-2 flex flex-wrap'>{
        track.artists.map(el => <span key={el.id}>{el.name}</span>) 
        }</div>
      </div>
    </m.div>
  )
}

export default TrackCard