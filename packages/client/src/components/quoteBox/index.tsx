import React, { useEffect } from 'react'

import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'

import storeConfig from '@store/storeConfig'
import { reducer as quoteReducer } from './reducer'
import { rootQuoteSaga } from './sagas'
import { getCurrentQuote } from './selectors'
import { fetchQuote } from './actionCreators'

import { Typography } from '@components/styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

import ShareButton from '@components/shareButton'

const { registerReducer, registerSaga } = storeConfig

const QuoteBoxWrapper = styled.div`
  max-width: 600px;
  margin: 0px 50px;
  position: relative;
  display: flex;
  flex-direction: column;
`
const QuoteMarkWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
`
const QuoteTextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #b4b4b4;
  padding: 30px;
`
const QuoteAuthorWrapper = styled.div`
  text-align: right;
  font-style: italic;
`

const ShareButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const QuoteBox = () => {
  const currentQuote = useSelector(getCurrentQuote)
  const dispatch = useDispatch()

  useEffect(() => {
    registerReducer(quoteReducer, 'quotes')
    registerSaga(rootQuoteSaga)
  }, [])

  useEffect(() => {
    dispatch(fetchQuote())
  }, [])

  return (
    !!currentQuote && (
      <QuoteBoxWrapper>
        <QuoteMarkWrapper>
          <FontAwesomeIcon icon={faQuoteRight} color="#927676" size="6x" />
        </QuoteMarkWrapper>
        <QuoteTextWrapper>
          <Typography color="contrast" fontSize="1.5em">
            {currentQuote.text}
          </Typography>
          <ShareButtonWrapper>
            <ShareButton />
          </ShareButtonWrapper>
        </QuoteTextWrapper>
        <QuoteAuthorWrapper>
          <Typography color="#927676" fontSize="2em">
            -{currentQuote.author}
          </Typography>
        </QuoteAuthorWrapper>
      </QuoteBoxWrapper>
    )
  )
}

export default QuoteBox
