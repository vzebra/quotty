export const screenWidths = {
  xxs: 360,
  xs: 410,
  s: 640,
  m: 768,
  l: 1024,
  xl: 1440,
  xxl: 2560
}

type Breakpoints = Record<keyof typeof screenWidths, string>

const breakpoints = Object.keys(screenWidths).reduce(
  (acc: Partial<Breakpoints>, key: keyof Breakpoints) => {
    const screenWidth = screenWidths[key]
    const mediaQuery = `(min-width: ${screenWidth}px)`
    acc[key] = mediaQuery
    return acc
  },
  {}
)

export default breakpoints
