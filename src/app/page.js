'use client'
import { useEffect } from 'react'
import HeaderComp from "@/components/homePage/HeaderComp";
import { handleLogin } from "@/utils/requests/authReq";
import { useCookies } from 'react-cookie';

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  useEffect(() => {
    if (!cookies.access_token) {
      handleLogin()
    }
  }, [])
  return (
    <div>
      <HeaderComp />
      <button onClick={handleLogin}>logearse</button>
    </div>
  )
}
