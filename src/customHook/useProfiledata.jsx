'use client'
import { getProfileData, getTopArtists, getTopTracks, getUserPlaylists } from '@/utils/requests/profileReq';
import { useProfile } from '@/zustand/useProfileStore';
import { useProfileTop } from '@/zustand/useTopItems';
import { useUserPlaylists } from '@/zustand/useUserPlaylists';

const useProfiledata = () => {
  const {fillProfileData} = useProfile()
  const {fillArtistList, fillTrackList} = useProfileTop()
  const {fillPlaylists} = useUserPlaylists()
  
  const fillUserState = async (token) => {
    const data = await getProfileData(token)
    const profile = {
      username: data?.display_name,
      image: data?.images[1].url,
      followers: data?.followers.total,
      email: data?.email
    }
    fillProfileData(profile)
  }

  const fillUserTop = async (token) => {
    const topArtists = await getTopArtists(token)
    const topTracks = await getTopTracks(token)

    const modifiedTopTracks = await topTracks?.items?.map(el => ({
      album: el.album,
      artists: el.artists,
      explicit: el.explicit,
      external_url: el.external_urls.spotify,
      href: el.href,
      id: el.id,
      name: el.name
    }))
    
    const modifiedTopArtists = await topArtists?.items?.map(el => ({
      id: el.id,
      href: el.href,
      external_url: el.external_urls.spotify,
      name: el.name,
      images: el.images
    }))
    await fillArtistList(modifiedTopArtists)
    await fillTrackList(modifiedTopTracks)
  }

  const fillUserPlaylists = async (token) => {
    const {items} = await getUserPlaylists(token)
    await fillPlaylists(items)
  }

  return {fillUserState, fillUserTop, fillUserPlaylists}
}

export default useProfiledata