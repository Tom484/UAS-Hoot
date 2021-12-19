import uuid from "react-uuid"

export const createNotificationUtils = (state, newNotification) => {
  let previousNotification = state.notifications
  if (previousNotification.length > 1) previousNotification.shift()

  return [
    ...previousNotification,
    { ...newNotification, deleteTime: new Date().getTime() + 7000, id: uuid() },
  ]
}

export const deleteNotificationUtils = (state, id) => {
  return state.notifications.filter(notification => notification.id !== id)
}
