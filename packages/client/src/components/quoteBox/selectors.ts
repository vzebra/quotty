import { CombinedAppState } from '@interfaces/state'

import { createSelector } from 'reselect'

import { getPropertyByName } from '@helpers/collection'

const getQuote = (combinedAppState: CombinedAppState) =>
  combinedAppState?.quotes

export const getCurrentQuote = createSelector(
  getQuote,
  getPropertyByName('currentQuote')
)
