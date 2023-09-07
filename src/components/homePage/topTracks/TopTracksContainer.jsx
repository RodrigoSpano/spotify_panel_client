import { useProfileTop } from '@/zustand/useTopItems'
import React from 'react'
import TrackCard from './TrackCard'
import TopArtistsModal from '../TopItems/TopArtistsModal'

const TopTracksContainer = () => {
  const {tracksList} = useProfileTop()
  return (
    <div className='w-[300px] flex flex-col gap-3 rounded-md'>
    <h3 className='font-semibold text-xl text-center capitalize'>favorites songs</h3>
    <div className='flex flex-col items-start justify-center gap-2'>
      {
        tracksList.length > 0 ? tracksList.slice(0,5).map((el, index) => <TrackCard track={el} position={++index} key={el.id} />) : null
      }
    </div>
      <TopArtistsModal array={tracksList} type='tracks' /> 
  </div>
  )
}

export default TopTracksContainer