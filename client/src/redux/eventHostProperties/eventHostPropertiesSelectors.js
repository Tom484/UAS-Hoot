import { createSelector } from "reselect"

const selectEventHost = state => state.eventHostProperties

export const selectEventProperties = createSelector([selectEventHost], event => event.properties)

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
export const selectEventPropertiesHost = createSelector(
  [selectEventProperties],
  properties => properties?.host || {}
)
