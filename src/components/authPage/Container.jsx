'use client'
import React, {useEffect} from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'

const Container = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const searchParams = useSearchParams()
  const router = useRouter()
  
  useEffect(() => {
    async function settingCookie(){
      await setCookie('access_token', searchParams.get('token'), {path: '/', maxAge: 3600})
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