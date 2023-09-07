import axios from "axios";

export const getArtistInfo = async (token, id) => {
  try {
    const { data } = await axios(`/artist/${id}?token=${token}`)
    return data
  } catch (error) {
    console.log(error)
  }
}