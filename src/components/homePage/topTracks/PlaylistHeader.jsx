import React from 'react'

const PlaylistHeader = ({images, name, description, owner, publicList, songs }) => {
  return (
    <div className='flex pl-4 text-white gap-5 '>
      <img src={images[0].url} alt='playlist cover' width={140} className='rounded-md' />
      <div className='flex flex-col gap-2'>
        <span className='capitalize text-xs text-white/60'>{publicList ? 'public' : 'private'} playlist</span>
        <h4 className='text-5xl font-bold font-kanit'>{name}</h4>
        <p className='text-xs text-white/60'>{description ? description : 'No description provided'}</p>
        <div className='flex gap-1'>
          <p className='text-white font-medium'>{owner}</p>
          <span>•</span>
          <p>{1} like</p>
          <span>•</span>
          <p>{songs} songs</p>
        </div>
        
      </div>
    </div>
  )
}

export default PlaylistHeader