export type NavigationItem = {
  title: string
  href: string
}

export type NavigationRoutes = {
  navItem: NavItem[]
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    github: string
  }
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
