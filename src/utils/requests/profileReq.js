import axios from "axios";

export const getProfileData = async (token) => {
  try {
    const { data } = await axios(`/profile?token=${token}`)
    return data
  } catch (error) {
    console.log(error)
  }
}