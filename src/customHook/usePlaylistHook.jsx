'use client'
import { getPlaylistTracks } from '@/utils/requests/playlistReq'
import { useUserPlaylists } from '@/zustand/useUserPlaylists'
import React from 'react'
import { useCookies } from 'react-cookie'

const usePlaylistHook = () => {
  const [cookies] = useCookies(['access_token'])
  const {fillDetail, fillTracks} = useUserPlaylists()
  
  const handlePlaylistTracks = async (id) => {
    const {items} = await getPlaylistTracks(cookies.access_token, id)
    const modifiedTrack = await items.map((el) => ({
      album: el.track.album,
      artist: el.track.artist,
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
  }
  return {handlePlaylistTracks}
}

export default usePlaylistHook