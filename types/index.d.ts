export type NavigationItem = {
  title: string
  href: string
}

export type NavigationRoutes = {
  navItem: NavigationItem[]
}

export type Link = {
  name: string
  href: string
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: Link[]
}

export type ProjectType = {
  name: string
  coverImage: string
  description: string
  githubUrl: string
  previewUrl?: string
  tools?: string[]
}

export type SkillItem = {
  name: string
  Icon: IconType
}

export type Song = {
  album: string;
  artist: string;
  albumImageUrl: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type SpotifyTrack = {
  title: string
  artist: string
  url: string
  trackImageUrl: string
}

export type SpotifyArtist = {
  name: string
  url: string
  artistImageUrl: string
  genres: string[]
}

export interface ITracksAPIResponse {
  album: ISpotifyAlbum
  artists: ISpotifyAlbum[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: IExternalUrls
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url?: string
  track_number: number
  type: string
  uri: string
}

export interface IArtistsAPIResponse {
  external_urls: IExternalUrls
  followers: IFollowers
  genres?: string[] | null
  href: string
  id: string
  images?: IImagesEntity[] | null
  name: string
  popularity: number
  type: string
  uri: string
}
