'use client'
import { useEffect } from 'react'
import HeaderComp from "@/components/homePage/HeaderComp";
import { handleLogin } from "@/utils/requests/authReq";
import { useCookies } from 'react-cookie';
import { getProfileData } from '@/utils/requests/profileReq';
import useProfiledata from '@/customHook/useProfiledata';

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const { fillUserState } = useProfiledata()

  async function handleUserLogin() {
    await handleLogin()
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
    <div>
      <HeaderComp />
    </div>
  )
}
