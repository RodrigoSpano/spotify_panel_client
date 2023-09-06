import React from 'react'


export const UserInfo = ({profile}) => {
  return (
    <div className='flex flex-col gap-5 pt-20'>
      <h2 className='text-6xl font-bold'>{profile.username}</h2>
      <div className='flex gap-2 capitalize font-medium'>
        <span><strong>{profile.followers}</strong> followers</span>
      </div>
    </div>
  )
}
