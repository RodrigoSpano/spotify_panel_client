import { useProfileTop } from '@/zustand/useTopItems'
import React from 'react'
import ArtistCard from './ArtistCard'
import TopArtistsModal from './TopArtistsModal'

const TopArtists = () => {
  const {artistsList} = useProfileTop()
  return (
    <div className='w-[300px] flex flex-col gap-3 rounded-md'>
      <h3 className='font-semibold text-xl text-center'>Your Artists Top</h3>
      <div className='flex flex-col items-start justify-center gap-2'>
        {
          artistsList.length > 0 ? artistsList.slice(0,5).map((el, index) => <ArtistCard artist={el} position={++index} key={el.id} />) : null
        }
      </div>
        <TopArtistsModal type={'artists'} array={artistsList} />
    </div>
  )
}

export default TopArtists