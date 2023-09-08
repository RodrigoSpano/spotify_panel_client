import axios from "axios";

export const getPlaylistTracks = async (token, playlistId) => {
  try {
    const { data } = await axios(`/profile/playlist/${playlistId}?token=${token}`)
    return data
  } catch (error) {
    console.log(error)
  }
}