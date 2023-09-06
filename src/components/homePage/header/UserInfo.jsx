import React from 'react'


export const UserInfo = ({profile}) => {
  return (
    <div className='flex flex-col gap-10 pt-20'>
      <h2 className='text-6xl font-bold'>{profile.username}</h2>
      <div className='flex gap-2 capitalize font-medium'>
        {/* <span><strong>10</strong> public playlist</span> */}
        <span><strong>{profile.followers}</strong> followers</span>
        <span>• <strong>19</strong> following</span>
      </div>
    </div>
  )
}
