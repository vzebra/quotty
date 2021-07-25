export enum ShareActionType {
  SET_DIALOG_VISIBILITY = 'setDialogVisibility',
  SEND_QUOTE_BY_EMAIL = 'sendQuoteByEmail'
}

export interface SetDialogVisibilityAction {
  type: ShareActionType.SET_DIALOG_VISIBILITY
  payload: boolean
}

export interface QuotePayload {
  email: string
  quote: {
    author: string
    text: string
  }
}

export interface SendQuoteByEmailAction {
  type: ShareActionType.SEND_QUOTE_BY_EMAIL
  payload: QuotePayload
}

export type ShareAction = SetDialogVisibilityAction | SendQuoteByEmailAction
