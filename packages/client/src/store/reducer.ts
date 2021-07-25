import { GlobalActionType } from './actions'
import { GlobalAction } from './actionCreators'
import { GlobalState } from '@interfaces/state'

const initialState = {
  appIsReady: false
}

export const reducer = (
  state: GlobalState = initialState,
  action: GlobalAction
): GlobalState => {
  switch (action.type) {
    case GlobalActionType.SET_READY: {
      return { ...state, appIsReady: true }
    }
    default:
      return state
  }
}
