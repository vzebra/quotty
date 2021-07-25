import { GlobalActionType } from './actions'

export interface GlobalAction {
  type: GlobalActionType
}

export const setAppReady = (): GlobalAction => ({
  type: GlobalActionType.SET_READY
})
