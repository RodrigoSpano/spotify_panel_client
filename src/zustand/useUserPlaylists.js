import { create } from "zustand";

export const useUserPlaylists = create((set) => ({
  playlists: [],
  playlistDetail: {},
  playlistTracks: [],
  fillPlaylists: (data) => set(() => ({ playlists: data })),
  fillDetail: (data) => set(() => ({ playlistDetail: data })),
  fillTracks: (data) => set(() => ({ playlistTracks: data }))
}))