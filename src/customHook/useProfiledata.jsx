'use client'
import { getProfileData, getTopArtists, getTopTracks } from '@/utils/requests/profileReq';
import { useProfile } from '@/zustand/useProfileStore';
import { useProfileTop } from '@/zustand/useTopItems';

const useProfiledata = () => {
  const {fillProfileData} = useProfile()
  const {fillArtistList, fillTrackList} = useProfileTop()
  
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
      href: el.href,
      id: el.id,
      name: el.name
    }))

    const modifiedTopArtists = await topArtists?.items?.map(el => ({
      id: el.id,
      href: el.href,
      name: el.name,
      images: el.images
    }))
    
    await fillArtistList(modifiedTopArtists)
    await fillTrackList(modifiedTopTracks)
  }

  return {fillUserState, fillUserTop}
}

export default useProfiledata