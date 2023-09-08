import { create } from "zustand";

export const useUserPlaylists = create((set) => ({
  playlists: [],
  playlistsBackup: [],
  playlistDetail: {},
  playlistTracks: [],
  fillPlaylists: (data) => set(() => ({ playlists: data, playlistsBackup: data })),
  fillDetail: (data) => set(() => ({ playlistDetail: data })),
  fillTracks: (data) => set(() => ({ playlistTracks: data })),
  orderTracks: (type) => {
    switch (type) {
      case 'artist':
        set((state) => ({
          playlistTracks: state.playlistTracks.sort((a, b) => {
            const nameA = a.artist[0].name.toUpperCase();
            const nameB = b.artist[0].name.toUpperCase();

            if (nameA < nameB) {
              return -1;
            }

            if (nameA > nameB) {
              return 1;
            }

            return 0;
          })
        }))
        break;
      // case 'custom order':
      //   set((state) => ({ playlists: state.playlistsBackup }))
      // default:
      //   set((state) => ({ playlists: state.playlistsBackup }))
    }
  }
}))