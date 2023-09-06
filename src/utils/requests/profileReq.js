import axios from "axios";

export const getProfileData = async (token) => {
  try {
    const { data } = await axios(`/profile?token=${token}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getTopArtists = async (token) => {
  try {
    const { data } = await axios(`/profile/top/artists?token=${token}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getTopTracks = async (token) => {
  try {
    const { data } = await axios(`/profile/top/tracks?token=${token}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
