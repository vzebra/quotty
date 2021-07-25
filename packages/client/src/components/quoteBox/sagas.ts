import { takeEvery, call, put } from 'redux-saga/effects'

import { QuoteActionType } from './actions'
import { setCurrentQuote, reportFetchQuoteError } from './actionCreators'

import { getRandomQuote } from '@api/index'

export function* rootQuoteSaga() {
  yield takeEvery(QuoteActionType.FETCH_QUOTE, fetchQuoteSaga)
}

export function* fetchQuoteSaga() {
  try {
    const { data: randomQuote } = yield call(getRandomQuote)
    yield put(setCurrentQuote(randomQuote))
  } catch (error) {
    yield put(reportFetchQuoteError(error))
  }
}
