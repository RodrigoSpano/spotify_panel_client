import { create } from 'zustand'

export const useProfileTop = create((set) => ({
  artistsList: [],
  tracksList: [],
  fillArtistList: (data) => set(() => ({ artistsList: data })),
  fillTrackList: (data) => set(() => ({ tracksList: data })),
  cleanStates: () => set({ artistsList: [], tracksList: [] }),
}))