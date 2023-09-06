
import Image from 'next/image'
import React from 'react'
import { UserInfo } from './header/UserInfo'
import { useProfile } from '@/zustand/useProfileStore'

const HeaderComp = () => {
  const {profile} = useProfile()
  return (
    <div className='flex items-center mt-10 gap-10 '>
      <Image src={profile?.image} alt='rodrigo' className='rounded-[9999px]' height='300' width={'300'} />
      <UserInfo profile={profile} />
    </div>
  )
}

export default HeaderComp