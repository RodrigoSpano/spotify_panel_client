import { create } from "zustand";

export const useUserPlaylists = create((set) => ({
  playlists: [],
  playlistDetail: {},
  playlistTracks: [],
  tracksCopy: [],
  fillPlaylists: (data) => set(() => ({ playlists: data })),
  fillDetail: (data) => set(() => ({ playlistDetail: data })),
  fillTracks: (data) => set(() => ({ playlistTracks: data, tracksCopy: data })),
  orderTracks: (type) => {
    switch (type) {
      case 'artist':
        return set((state) => ({
          playlistTracks: state.tracksCopy.sort((a, b) => {
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
      case 'title':
        return set((state) => ({ playlistTracks: state.tracksCopy.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())) }))
      case 'album':
        return set(state => ({ playlistTracks: state.tracksCopy.sort((a, b) => a.album.name.toLowerCase().localeCompare(b.album.name.toLowerCase())) }))
      case 'duration':
        return set((state) => ({ playlistTracks: state.tracksCopy.sort((a, b) => a.duration_ms - b.duration_ms) }))
      case 'custom order':
        return set((state) => ({ playlistTracks: [...state.tracksCopy] }));
    }
  }
}))