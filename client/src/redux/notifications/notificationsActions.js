import { NotificationActionTypes } from "./notificationsTypes"

export const createNotification = notification => ({
  type: NotificationActionTypes.CREATE_NOTIFICATION,
  payload: notification,
})

export const deleteNotification = id => ({
  type: NotificationActionTypes.DELETE_NOTIFICATION,
  payload: id,
})
