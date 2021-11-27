import { createSelector } from "reselect"

const selectEvent = state => state.eventResults

export const selectEventResults = createSelector([selectEvent], event => event?.results)

export const selectEventResultsArray = createSelector([selectEventResults], results =>
  Object.values(results)
)
