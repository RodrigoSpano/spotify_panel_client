import { NextResponse } from 'next/server'


export function middleware(request) {
  const token = request.cookies.get('access_token')?.value
  if (request.nextUrl.pathname === '/') {
    if (token) return NextResponse.next()
    else {
      const scope = 'user-read-private user-read-email user-top-read';
      const redirectTo = `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_ID}&client_secret=${process.env.SPOTIFY_SECRET}&response_type=code&redirect_uri=${process.env.SPOTIFY_CB}&scope=${scope}&show_dialog=true`
      return NextResponse.redirect(new URL(redirectTo))

    }
  }
}
