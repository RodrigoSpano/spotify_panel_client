
export const handleLogin = async () => {
  try {
    const scope = 'user-read-private user-read-email user-top-read';
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_ID}&client_secret=${process.env.SPOTIFY_SECRET}&response_type=code&redirect_uri=${process.env.SPOTIFY_CB}&scope=${scope}&state=njasd7jsd9sda&show_dialog=true`
  } catch (error) {
    console.log(error)
  }
}