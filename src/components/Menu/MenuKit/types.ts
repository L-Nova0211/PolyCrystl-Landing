export interface Profile {
  username?: string
  image?: string
  profileLink: string
  noProfileLink: string
  showPip?: boolean
}

export interface PushedProps {
  isPushed: boolean
  pushNav: (isPushed: boolean) => void
}

export interface NavTheme {
  background: string
}

export interface LinkStatus {
  text: string
}

export interface MenuSubEntry {
  label: string
  href: string
  calloutClass?: string
  status?: LinkStatus
}

export interface MenuEntry {
  label: string
  icon: string
  items?: MenuSubEntry[]
  href?: string
  calloutClass?: string
  initialOpenState?: boolean
  status?: LinkStatus
}
