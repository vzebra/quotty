import { CombinedAppState } from '@interfaces/state'

import { createSelector } from 'reselect'

import { getPropertyByName } from '@helpers/collection'

const getShare = (combinedAppState: CombinedAppState) => combinedAppState?.share

export const getShareDialogVisibility = createSelector(
  getShare,
  getPropertyByName('dialogIsVisible')
)
