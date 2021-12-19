import { createSelector } from "reselect"

const selectNotificationsState = state => state.notifications

export const selectNotifications = createSelector(
  [selectNotificationsState],
  notifications => notifications?.notifications || []
)
