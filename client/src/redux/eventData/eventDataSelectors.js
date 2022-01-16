import { createSelector } from "reselect"

const selectEvent = state => state.eventData

export const selectEventData = createSelector([selectEvent], event => event?.data || null)

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
export const selectEventCurrentSlideOptions = createSelector(
  [selectEventCurrentSlide],
  slides => slides?.options || {}
)

export const selectEventCurrentSlideOptionsArray = createSelector(
  [selectEventCurrentSlideOptions],
  options => Object.values(options)
)

export const selectEventDataConnectEnterCode = createSelector(
  [selectEventDataConnect],
  eventDataConnect => eventDataConnect?.enterCode || null
)

export const selectEventDataHostTimeDifference = createSelector(
  [selectEventDataHost],
  data => data?.timeDifference || null
)
