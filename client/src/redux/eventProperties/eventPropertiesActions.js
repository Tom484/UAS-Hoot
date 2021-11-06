import EventPropertiesActions from "./eventPropertiesTypes"

export const createEventStart = id => ({
  type: EventPropertiesActions.CREATE_EVENT_START,
  payload: id,
})

export const createEventSuccess = data => ({
  type: EventPropertiesActions.CREATE_EVENT_SUCCESS,
  payload: data,
})

export const createEventFailure = errorMessage => ({
  type: EventPropertiesActions.CREATE_EVENT_FAILURE,
  payload: errorMessage,
})

export const startEventStart = () => ({
  type: EventPropertiesActions.START_EVENT_START,
})

export const startEventSuccess = data => ({
  type: EventPropertiesActions.START_EVENT_SUCCESS,
  payload: data,
})

export const startEventFailure = errorMessage => ({
  type: EventPropertiesActions.START_EVENT_FAILURE,
  payload: errorMessage,
})

export const updatePropertiesEventStart = data => ({
  type: EventPropertiesActions.UPDATE_PROPERTIES_EVENT_START,
  payload: data,
})

export const updatePropertiesEventSuccess = data => ({
  type: EventPropertiesActions.UPDATE_PROPERTIES_EVENT_SUCCESS,
  payload: data,
})

export const updatePropertiesEventFailure = errorMessage => ({
  type: EventPropertiesActions.UPDATE_PROPERTIES_EVENT_FAILURE,
  payload: errorMessage,
})

export const updatePropertiesConnectStart = data => ({
  type: EventPropertiesActions.UPDATE_PROPERTIES_CONNECT_START,
  payload: data,
})

export const updatePropertiesConnectSuccess = data => ({
  type: EventPropertiesActions.UPDATE_PROPERTIES_CONNECT_SUCCESS,
  payload: data,
})

export const updatePropertiesConnectFailure = errorMessage => ({
  type: EventPropertiesActions.UPDATE_PROPERTIES_CONNECT_FAILURE,
  payload: errorMessage,
})
