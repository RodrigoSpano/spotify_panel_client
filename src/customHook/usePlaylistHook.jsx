'use client'
import { getPlaylistTracks } from '@/utils/requests/playlistReq'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

const usePlaylistHook = () => {
  const [cookies] = useCookies(['access_token'])
  const [loader, setLoader] = useState({modal:false, tracks: false})

  const [tracks, setTracks] = useState([])
  const [backup, setBackup] = useState([])

  const [search, setSearch] = useState('')
  
  // get playlist tracks
  const handlePlaylistTracks = async (id) => {
    setLoader({...loader, modal: true})
    const {items} = await getPlaylistTracks(cookies.access_token, id)
    const modifiedTracks = await items.map((el) => ({
      added_at: el.added_at,
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
    setTracks(modifiedTracks)
    setBackup(modifiedTracks)
    setLoader({...loader, modal: false})
  }

  const handleOrderTracks = async (type) => {
    let filteredArr = []
    setLoader({...loader, tracks: true})
    if(type === 'title') filteredArr = backup.sort((a,b) => a.name.localeCompare(b.name))
    if(type === 'artist') filteredArr = backup.sort((a,b) => a.artist[0].name.localeCompare(b.artist[0].name))
    if(type === 'album') filteredArr = backup.sort((a,b) => a.album.name.localeCompare(b.album.name))
    if(type === 'duration') filteredArr = backup.sort((a,b) => a.duration_ms - b.duration_ms)
    if(type === 'custom order') filteredArr = backup.sort((a,b) => new Date(a.added_at) - new Date(b.added_at))
    setTracks(filteredArr)
    setLoader({...loader, tracks: false})
  }

  const handleChangeSearch = (value) => {
    setSearch(value)
  }

  const handleSearchTrack = async () => {
    setLoader({...loader, tracks: true})
    const filteredTracks = backup.filter(el => el.name.toLowerCase().startsWith(search))
    if(!filteredTracks.length) setTracks([])
    else setTracks(filteredTracks)
  setTimeout(() => {
    setLoader({...loader, tracks: false})
    
  }, 1000);
  }


  return {handlePlaylistTracks, handleOrderTracks, handleSearchTrack, handleChangeSearch, loader, tracks}
}

export default usePlaylistHook