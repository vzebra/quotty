import { QuoteAction, QuoteActionType } from './actions'

import { QuoteState } from '@interfaces/state'

const initialState: QuoteState = {
  currentQuote: null
}

export const reducer = (
  state: QuoteState = initialState,
  action: QuoteAction
) => {
  switch (action.type) {
    case QuoteActionType.SET_CURRENT_QUOTE: {
      const { currentQuote } = action
      return { ...state, currentQuote }
    }
    default:
      return state
  }
}
