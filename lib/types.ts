import { IconType } from "react-icons"

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
  followers: number 
}


