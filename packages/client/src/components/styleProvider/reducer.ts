import { StylingActionType, StylingAction } from './actions'
import { StylingState } from '@interfaces/state'

const initialState: StylingState = {
  orientation: null
}

export const reducer = (
  state: StylingState = initialState,
  action: StylingAction
) => {
  switch (action.type) {
    case StylingActionType.SET_ORIENTATION: {
      const { orientation } = action.payload
      return { ...state, orientation }
    }
    default:
      return state
  }
}
