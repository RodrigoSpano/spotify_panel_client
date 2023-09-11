'use client'
import { getPlaylistTracks } from '@/utils/requests/playlistReq'
import { useUserPlaylists } from '@/zustand/useUserPlaylists'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

const usePlaylistHook = () => {
  const [cookies] = useCookies(['access_token'])
  const {fillDetail, fillTracks, orderTracks} = useUserPlaylists()
  const [loader, setLoader] = useState(false)
  
  const handlePlaylistTracks = async (id) => {
    setLoader(true)
    const {items} = await getPlaylistTracks(cookies.access_token, id)
    const modifiedTrack = await items.map((el) => ({
      album: el.track.album,
      artist: el.track.artists,
      duration_ms: el.track.duration_ms,
      explicit: el.track.explicit,
      external_url: el.track.external_urls.spotify,
      id: el.track.id,
      href: el.track.href,
      name: el.track.name,
      preview_url: el.track.preview_url,
      type: el.track.type
    }))
    await fillTracks(modifiedTrack)
    setLoader(false)
  }

  const handleOrderTracks = async (type) => {
    await orderTracks(type)
  }

  return {handlePlaylistTracks, handleOrderTracks, loader}
}

export default usePlaylistHook