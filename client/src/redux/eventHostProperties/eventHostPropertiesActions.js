import EventHostPropertiesActions from "./eventHostPropertiesTypes"

export const createEventStart = id => ({
  type: EventHostPropertiesActions.CREATE_EVENT_START,
  payload: id,
})

export const createEventSuccess = data => ({
  type: EventHostPropertiesActions.CREATE_EVENT_SUCCESS,
  payload: data,
})

export const createEventFailure = errorMessage => ({
  type: EventHostPropertiesActions.CREATE_EVENT_FAILURE,
  payload: errorMessage,
})
