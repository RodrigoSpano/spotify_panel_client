'use client'
import useProfiledata from '@/customHook/useProfiledata'
import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import CloseContainer from './CloseContainer'
import {LuLibrary} from 'react-icons/lu'
import { OpenContainer } from './OpenContainer'

const Sidebar = () => {
  const [cookies] = useCookies(['access_token'])
  const [open, setOpen] = useState(true)
  const {fillUserPlaylists} = useProfiledata()

  useEffect(() => {
    fillUserPlaylists(cookies.access_token)
  },[])

  return (
    <div className={`min-h-creen ${open ? 'w-96' : 'w-20'} flex flex-col items-center gap-4 py-4 transition-all ease-linear duration-250 bg-zinc-900 rounded-md my-2`}>
      <button className='text-3xl text-zinc-400 hover:text-white' onClick={() => setOpen(!open)}>
        <LuLibrary />
      </button>
      <div className='w-full'>
        <CloseContainer isOpen={open} />
        <OpenContainer isOpen={open} />
      </div>
    </div>
  )
}

export default Sidebar