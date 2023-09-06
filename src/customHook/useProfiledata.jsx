'use client'
import { getProfileData } from '@/utils/requests/profileReq';
import { useProfile } from '@/zustand/useProfileStore';

const useProfiledata = () => {
  const {fillProfileData} = useProfile()
  
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
  return {fillUserState}
}

export default useProfiledata