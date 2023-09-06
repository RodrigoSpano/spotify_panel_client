'use client'
import React, {useEffect} from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'

const Container = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const searchParams = useSearchParams()
  const router = useRouter()
  console.log('hola')
  
  useEffect(() => {
    async function settingCookie(){
      await setCookie('access_token', searchParams.get('token'))
      router.push('/')
    }
    settingCookie()
  },[])
  return (
    <div>
      <span>Redirecting...</span>
    </div>
  )
}

export default Container