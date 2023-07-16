type SpotifyAccessToken = {
  access_token: string
}

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_CLIENT_REFRESH_TOKEN

const getAccessToken = async (): Promise<SpotifyAccessToken> => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${client_id}:${client_secret}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!
    })
  })

  return response.json()
}

export const recentlyPlayedSong = async () => {
  const { access_token }: { access_token: string } = await getAccessToken()

  return fetch('https://api.spotify.com/v1/me/player/recently-played', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const nowPlayingSong = async () => {
  const { access_token }: { access_token: string } = await getAccessToken()

  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
