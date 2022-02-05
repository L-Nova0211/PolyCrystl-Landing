import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from './types'

export interface CrystalTheme {
  siteWidth: number
  isDark: boolean
  colors: Colors
  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  spacing: Spacing
  shadows: Shadows
  radii: Radii
  zIndices: ZIndices
}

export { lightColors } from './colors'
export { darkColors } from './colors'
