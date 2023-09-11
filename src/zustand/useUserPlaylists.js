import { create } from "zustand";

export const useUserPlaylists = create((set) => ({
  playlists: [],
  fillPlaylists: (data) => set(() => ({ playlists: data })),
}))