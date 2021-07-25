import React, { ReactNode, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes'
import sizing from './sizing'

import storeConfig from '@store/storeConfig'
import { reducer as stylingReducer } from './reducer'
import { setOrientation } from './actionCreators'
import { Orientation } from '@interfaces/state'

import useDebouncedEventListener from '@hooks/useDebouncedEventListener'

interface StyleProviderProps {
  children: ReactNode
}

const GlobalStyles = createGlobalStyle`
    ${sizing}
`
const { registerReducer } = storeConfig

const StyleProvider = ({ children }: StyleProviderProps) => {
  const dispatch = useDispatch()
  const orientationSetter = () => {
    const { innerWidth, innerHeight } = window
    const orientation =
      innerWidth > innerHeight ? Orientation.ALBUM : Orientation.PORTRAIT
    dispatch(setOrientation(orientation))
  }

  useDebouncedEventListener('resize', orientationSetter, 200)

  useEffect(() => {
    registerReducer(stylingReducer, 'styling')
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default StyleProvider
