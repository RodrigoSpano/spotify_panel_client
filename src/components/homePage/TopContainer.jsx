import useProfiledata from '@/customHook/useProfiledata'
import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie';
import TopArtists from './TopItems/TopArtists';
import { useProfileTop } from '@/zustand/useTopItems';
import TopTracksContainer from './topTracks/TopTracksContainer';

const TopContainer = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  const {fillUserTop} = useProfiledata()
  const {artistsList, tracksList} = useProfileTop()

  useEffect(() => {
    fillUserTop(cookies.access_token)
  }, [])
  return (
    <div className='select-none w-full flex flex-col lg:flex-row flex-wrap items-center gap-10 lg:gap-0 lg:justify-evenly pb-5'>
      {
        !artistsList || !tracksList ? <span>loading</span> : <>
          <TopArtists />
          <TopTracksContainer />
        </>
      }
    </div>
  )
}

export default TopContainer