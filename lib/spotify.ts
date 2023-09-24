import { SpotifyApi } from "@spotify/web-api-ts-sdk"
import type { AccessToken } from "@spotify/web-api-ts-sdk"

const client_id = process.env.SPOTIFY_CLIENT_ID as string
const client_secret = process.env.SPOTIFY_CLIENT_SECRET as string
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

export const getAccessToken = async (): Promise<AccessToken> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    })
  })

  return response.json()
}

export async function getSpotifyApi() {
  const access_token = await getAccessToken()
  return SpotifyApi.withAccessToken(client_id, access_token)
}