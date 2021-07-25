import React, { StrictMode } from 'react'
import { render } from 'react-dom'

import App from '@components/index'
import PageHead from '@components/pageHead'
import StyleProvider from '@components/styleProvider'

import { Provider } from 'react-redux'
import storeConfig from '@store/storeConfig'

const rootNode = document.getElementById('root')

const store = storeConfig.getStore()

render(
  <StrictMode>
    <Provider {...{ store }}>
      <PageHead />
      <StyleProvider>
        <App />
      </StyleProvider>
    </Provider>
  </StrictMode>,
  rootNode
)
