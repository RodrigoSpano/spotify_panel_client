'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import {HiExternalLink} from 'react-icons/hi'
import useArtistData from '@/customHook/useArtistData'
import { useCookies } from 'react-cookie'
import { useDisclosure } from '@nextui-org/react'
import ArtistProfileModal from '../artistProfile/ProfileModal'

const ArtistCard = ({artist, position}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const {handleArtistDate, artist: artistState} = useArtistData()

  const handleClick = async () => {
    await handleArtistDate(cookies?.access_token, artist.id)
    onOpen()
  }

  return (
    <motion.div whileHover={{scale: 1.1}} className='flex gap-3 transition-all ease-linear duration-250 items-center justify-start cursor-pointer h-[60px] w-full rounded-md hover:bg-background/10 px-2' onClick={handleClick}>
      <span className='font-bold text-strong-green'>{position}</span>
      <Image src={artist.images[0].url} alt='artist image' width={50} height={50} className='rounded-md' />
      <p className='font-medium max-w-[100px] '>{artist.name}</p>
      <span ><HiExternalLink /></span>
      <ArtistProfileModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} artist={artistState} />
    </motion.div>
  )
}

export default ArtistCard