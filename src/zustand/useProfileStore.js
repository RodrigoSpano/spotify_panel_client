import { create } from 'zustand'

const initialState = {
  username: '',
  email: '',
  image: '',
  followers: null,
  following: null,
}

export const useProfile = create((set) => ({
  profile: initialState,
  fillProfileData: (data) => set((state) => ({ profile: { ...state.profile, ...data } })),
  removeProfileData: () => set({ profile: initialState }),
  updateProfileData: (data) => set((state) => ({ profile: { ...state, data } }))
}))