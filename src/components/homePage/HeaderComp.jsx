'use client'

import Image from 'next/image'
import React from 'react'
import { UserInfo } from './header/UserInfo'

const HeaderComp = () => {
  return (
    <div className='flex items-center mt-10 gap-10 '>
      <Image src='https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228' alt='rodrigo' className='rounded-[9999px]' height='300' width={'300'} />
      <UserInfo />
    </div>
  )
}

export default HeaderComp