import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from 'react-redux'
import storeConfig from '@store/storeConfig'
import { reducer as shareReducer } from './reducer'
import { setDialogVisibility } from './actionCreators'
import { rootShareSaga } from './sagas'

const { registerReducer, registerSaga } = storeConfig

const ShareButton = () => {
  const dispatch = useDispatch()
  const openDialog = () => dispatch(setDialogVisibility(true))

  useEffect(() => {
    registerReducer(shareReducer, 'share')
    registerSaga(rootShareSaga)
  }, [])

  return (
    <FontAwesomeIcon
      icon={faShareAlt}
      size="2x"
      color="#fff"
      onClick={openDialog}
    />
  )
}

export default ShareButton
