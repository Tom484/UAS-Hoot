import { createSelector } from "reselect"

const selectEvent = state => state.eventProperties

export const selectEventProperties = createSelector([selectEvent], event => event?.properties)

export const selectEventPropertiesCollection = createSelector(
  [selectEventProperties],
  properties => properties?.collection || {}
)
export const selectEventPropertiesConnect = createSelector(
  [selectEventProperties],
  properties => properties?.connect || {}
)
export const selectEventPropertiesEvent = createSelector(
  [selectEventProperties],
  properties => properties?.event || {}
)
export const selectEventPropertiesAdmin = createSelector(
  [selectEventProperties],
  properties => properties?.admin || {}
)
