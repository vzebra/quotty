import { ShareActionType, ShareAction, QuotePayload } from './actions'

export const setDialogVisibility = (payload: boolean): ShareAction => ({
  type: ShareActionType.SET_DIALOG_VISIBILITY,
  payload
})

export const sendQuoteByEmail = (payload: QuotePayload): ShareAction => ({
  type: ShareActionType.SEND_QUOTE_BY_EMAIL,
  payload
})
