import React from 'react'


export const UserInfo = ({profile}) => {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className=' text-6xl font-bold drop-shadow-xl'>{profile.username}</h2>
      <div className='flex gap-2 capitalize font-medium'>
        <span><strong>{profile.followers}</strong> followers</span>
      </div>
    </div>
  )
}
