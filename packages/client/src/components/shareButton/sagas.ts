import { takeEvery, call } from 'redux-saga/effects'

import { ShareActionType, ShareAction } from './actions'

import { emailQuote } from '@api/emailApi'

export function* rootShareSaga() {
  yield takeEvery(ShareActionType.SEND_QUOTE_BY_EMAIL, sendEmailSaga)
}

export function* sendEmailSaga(action: ShareAction) {
  try {
    yield call(emailQuote, action.payload)
  } catch (err) {
    console.log(err)
  }
}
