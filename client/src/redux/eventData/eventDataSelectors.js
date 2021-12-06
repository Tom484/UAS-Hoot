import { createSelector } from "reselect"

const selectEvent = state => state.eventData

export const selectEventData = createSelector([selectEvent], event => event?.data)

export const selectEventDataCollection = createSelector(
  [selectEventData],
  data => data?.collection || {}
)
export const selectEventDataConnect = createSelector([selectEventData], data => data?.connect || {})
export const selectEventDataEvent = createSelector([selectEventData], data => data?.event || {})
export const selectEventDataHost = createSelector([selectEventData], data => data?.host || {})

export const selectEventCurrentSlide = createSelector(
  [selectEventDataCollection, selectEventDataEvent],
  (collection, event) => collection?.slides?.[event.slideId] || {}
)
