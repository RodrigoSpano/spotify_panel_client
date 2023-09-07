'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import {HiExternalLink} from 'react-icons/hi'

const ArtistCard = ({artist, position}) => {

  const handleClick = async () => {
    window.open(artist.external_url, '_blank')
  }

  return (
    <motion.div whileHover={{scale: 0.9}} className='flex gap-3 transition-all ease-linear duration-250 items-center justify-start cursor-pointer h-[60px] w-full rounded-md hover:bg-background/10 px-2' onClick={handleClick}>
      <span className='font-bold text-strong-green'>{position}</span>
      <Image src={artist.images[0].url} alt='artist image' width={50} height={50} className='rounded-md' />
      <p className='font-medium max-w-[100px] '>{artist.name}</p>
      <span ><HiExternalLink /></span>
    </motion.div>
  )
}

export default ArtistCard