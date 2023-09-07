'use client'
import { getArtistInfo } from '@/utils/requests/artistReq'
import {useState} from 'react'

const initialState = {
  name: '',
  href: '',
  followers: null,
  id: '',
  genres: [],
  images: [],

}

const useArtistData = () => {
  const [artist, setArtist] = useState(initialState)

  const handleArtistDate = async (token, id) => {
    const data = await getArtistInfo(token, id)
    console.log(data)
    setArtist({
      name: data.name,
      href: data.href,
      followers: data.followers.total,
      id: data.id,
      genres: data.genres,
      images: data.images
    })
  }

  return {handleArtistDate, artist}
}

export default useArtistData