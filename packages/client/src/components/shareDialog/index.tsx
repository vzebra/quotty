import React, { ChangeEvent, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getShareDialogVisibility } from '@components/shareButton/selectors'
import { getCurrentQuote } from '@components/quoteBox/selectors'
import {
  setDialogVisibility,
  sendQuoteByEmail
} from '@components/shareButton/actionCreators'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faPaperPlane,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

import {
  Typography,
  Overlay,
  Dialog,
  DialogHeader,
  DialogTitle,
  CloseButton,
  DialogBody,
  DialogFooter,
  Button
} from '@components/styled'

const ShareDialog = () => {
  const [email, setEmail] = useState<string>('')
  const dispatch = useDispatch()
  const isDialogVisible = useSelector(getShareDialogVisibility)
  const quote = useSelector(getCurrentQuote)
  const onClose = () => dispatch(setDialogVisibility(false))
  const onEmailChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>) => setEmail(value)
  const onSendQuote = () => {
    dispatch(sendQuoteByEmail({ email, quote }))
    setEmail(null)
    onClose()
  }

  return (
    !!isDialogVisible && (
      <Overlay>
        <Dialog>
          <DialogHeader>
            <DialogTitle>
              <Typography>Share Quote of the Day</Typography>
            </DialogTitle>
            <CloseButton onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          </DialogHeader>
          <DialogBody>
            <input
              type="email"
              placeholder="example@example.com"
              style={{ height: 35, width: '70%' }}
              value={email}
              onChange={onEmailChange}
            />
          </DialogBody>
          <DialogFooter>
            <Button onClick={onSendQuote}>
              <FontAwesomeIcon icon={faPaperPlane} />
              <Typography>SEND</Typography>
            </Button>
            <Button onClick={onClose}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <Typography>CANCEL</Typography>
            </Button>
          </DialogFooter>
        </Dialog>
      </Overlay>
    )
  )
}

export default ShareDialog
