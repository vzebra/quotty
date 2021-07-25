import { StylingActionType, StylingAction } from './actions'
import { Orientation } from '@interfaces/state'

export const setOrientation = (orientation: Orientation): StylingAction => ({
  type: StylingActionType.SET_ORIENTATION,
  payload: { orientation }
})
