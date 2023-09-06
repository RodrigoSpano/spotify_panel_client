import useProfiledata from '@/customHook/useProfiledata'
import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie';
import TopArtists from './TopItems/TopArtists';
import { useProfileTop } from '@/zustand/useTopItems';

const TopContainer = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  const {fillUserTop} = useProfiledata()
  const {artistsList, tracksList} = useProfileTop()

  useEffect(() => {
    fillUserTop(cookies.access_token)
  }, [])
  return (
    <div className='select-none w-full flex justify-evenly'>
      {
        !artistsList || !tracksList ? <span>loading</span> : 
        <TopArtists />
      }
    </div>
  )
}

export default TopContainer