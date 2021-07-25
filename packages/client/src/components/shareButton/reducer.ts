import { ShareAction, ShareActionType } from './actions'

import { ShareState } from '@interfaces/state'

const initialState: ShareState = {
  dialogIsVisible: false
}

export const reducer = (
  state: ShareState = initialState,
  action: ShareAction
) => {
  switch (action.type) {
    case ShareActionType.SET_DIALOG_VISIBILITY: {
      const { payload: dialogIsVisible } = action
      return { ...state, dialogIsVisible }
    }
    default:
      return state
  }
}
