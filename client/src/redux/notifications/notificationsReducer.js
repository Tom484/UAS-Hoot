import { NotificationActionTypes } from "./notificationsTypes"
import { createNotificationUtils, deleteNotificationUtils } from "./notificationsUtils"

const initialState = {
  notifications: [],
}

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NotificationActionTypes.CREATE_NOTIFICATION:
      return { notifications: createNotificationUtils(state, action.payload) }
    case NotificationActionTypes.DELETE_NOTIFICATION:
      return { notifications: deleteNotificationUtils(state, action.payload) }
    default:
      return state
  }
}

export default notificationsReducer
