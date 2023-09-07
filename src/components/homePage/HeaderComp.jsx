
import Image from 'next/image'
import React from 'react'
import { UserInfo } from './header/UserInfo'
import { useProfile } from '@/zustand/useProfileStore'

const HeaderComp = () => {
  const {profile} = useProfile()
  
  return (
    <div className='flex flex-col md:flex-row w-full bg-zinc-800 items-end lg:justify-start justify-center p-10 gap-5 select-none bg-[url("/assets/bg1.svg")] bg-no-repeat bg-cover bg-blend-color-burn rounded-t-md'>
      {profile.image ? <Image src={profile?.image} alt='profile image' className='drop-shadow-lg rounded-[9999px]' height='300' width={'300'} />:null}
      <UserInfo profile={profile} />
    </div>
  )
}

export default HeaderComp