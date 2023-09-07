'use client'
import { useEffect } from 'react'
import HeaderComp from "@/components/homePage/HeaderComp";
import { useCookies } from 'react-cookie';
import useProfiledata from '@/customHook/useProfiledata';
import TopContainer from '@/components/homePage/TopContainer';

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const { fillUserState } = useProfiledata()

  async function handleUserLogin() {
    fillUserState(cookies.access_token)
  }

  useEffect(() => {
    if (!cookies.access_token) {
      handleUserLogin()
    } else {
      fillUserState(cookies.access_token)
    }
  }, [])
  return (
    <div className='flex flex-col w-full bg-zinc-900 my-2 py-10 lg:py-0 rounded-md items-center gap-20'>
      <HeaderComp />
      <TopContainer />
    </div>
  )
}
