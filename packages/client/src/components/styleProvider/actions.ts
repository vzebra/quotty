import { Orientation } from '@interfaces/state'

export enum StylingActionType {
  SET_ORIENTATION = 'setOrientation'
}

export type StylingActionPayload = { orientation: Orientation }

export interface StylingAction {
  type: StylingActionType
  payload: StylingActionPayload
}
