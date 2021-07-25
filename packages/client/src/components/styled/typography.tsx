import styled from 'styled-components'

enum FontColor {
  'contrast',
  'normal'
}

interface TypographyProps {
  readonly fontSize?: string
  readonly typeface?: 'regular' | 'header'
  readonly color?: FontColor | string
}

export const Typography = styled.span<TypographyProps>`
  font-size: ${({ fontSize = '1em' }) => fontSize};
  font-family: ${({ theme, typeface = 'regular' }) =>
    theme.fonts.face[typeface]};
  color: ${({ theme, color = 'normal' }) =>
    Object.keys(FontColor).includes(color) ? theme.fonts.color[color] : color};
`
