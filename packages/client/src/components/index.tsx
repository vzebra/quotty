import React, { useEffect } from 'react'

import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { setAppReady } from '@store/actionCreators'

import QuoteBox from './quoteBox'
import ShareDialog from './shareDialog'

const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAppReady())
  }, [])

  return (
    <MainWrapper>
      <QuoteBox />
      <ShareDialog />
    </MainWrapper>
  )
}

export default App
