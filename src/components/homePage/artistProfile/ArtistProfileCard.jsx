import Image from 'next/image'
import React from 'react'

const ArtistProfileCard = ({artist}) => {
  console.log(artist)
  return (
    <div className='flex flex-col'>
      <Image src={artist.images[0].url} width={60} height={60} alt='profile pic' className='rounded-md' />
    </div>
  )
}

export default ArtistProfileCard