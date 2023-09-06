import axios from "axios";

export const getProfileData = async (token) => {
  try {
    const { data } = await axios(`/profile?token=${token}`)
    // console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}