import { css } from 'styled-components'

import { screenWidths } from './breakpoints'

const minWidth = Math.min(...Object.values(screenWidths))

const sizing = css`
  html,
  body,
  #root {
    margin: 0px;
    height: 100%;
    min-width: ${minWidth}px;
  }
`

export default sizing
