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

export const startEventStart = () => ({
  type: EventHostPropertiesActions.START_EVENT_START,
})

export const startEventSuccess = data => ({
  type: EventHostPropertiesActions.START_EVENT_SUCCESS,
  payload: data,
})

export const startEventFailure = errorMessage => ({
  type: EventHostPropertiesActions.START_EVENT_FAILURE,
  payload: errorMessage,
})

export const updateHostPropertiesEventStart = data => ({
  type: EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_EVENT_START,
  payload: data,
})

export const updateHostPropertiesEventSuccess = data => ({
  type: EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_EVENT_SUCCESS,
  payload: data,
})

export const updateHostPropertiesEventFailure = errorMessage => ({
  type: EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_EVENT_FAILURE,
  payload: errorMessage,
})

export const updateHostPropertiesConnectStart = data => ({
  type: EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_CONNECT_START,
  payload: data,
})

export const updateHostPropertiesConnectSuccess = data => ({
  type: EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_CONNECT_SUCCESS,
  payload: data,
})

export const updateHostPropertiesConnectFailure = errorMessage => ({
  type: EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_CONNECT_FAILURE,
  payload: errorMessage,
})
