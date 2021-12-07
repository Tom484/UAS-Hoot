import EventDataActions from "./eventDataTypes"

export const createEventStart = id => ({
  type: EventDataActions.CREATE_EVENT_START,
  payload: id,
})

export const createEventSuccess = data => ({
  type: EventDataActions.CREATE_EVENT_SUCCESS,
  payload: data,
})

export const createEventFailure = errorMessage => ({
  type: EventDataActions.CREATE_EVENT_FAILURE,
  payload: errorMessage,
})

export const startEventStart = () => ({
  type: EventDataActions.START_EVENT_START,
})

export const startEventSuccess = data => ({
  type: EventDataActions.START_EVENT_SUCCESS,
  payload: data,
})

export const startEventFailure = errorMessage => ({
  type: EventDataActions.START_EVENT_FAILURE,
  payload: errorMessage,
})

export const eventNextSlideStart = properties => ({
  type: EventDataActions.EVENT_NEXT_SLIDE_START,
  payload: properties,
})

export const eventNextSlideSuccess = data => ({
  type: EventDataActions.EVENT_NEXT_SLIDE_SUCCESS,
  payload: data,
})

export const eventNextSlideFailure = errorMessage => ({
  type: EventDataActions.EVENT_NEXT_SLIDE_FAILURE,
  payload: errorMessage,
})

export const updateDataEventStart = data => ({
  type: EventDataActions.UPDATE_DATA_EVENT_START,
  payload: data,
})

export const updateDataEventSuccess = data => ({
  type: EventDataActions.UPDATE_DATA_EVENT_SUCCESS,
  payload: data,
})

export const updateDataEventFailure = errorMessage => ({
  type: EventDataActions.UPDATE_DATA_EVENT_FAILURE,
  payload: errorMessage,
})

export const updateDataConnectStart = data => ({
  type: EventDataActions.UPDATE_DATA_CONNECT_START,
  payload: data,
})

export const updateDataConnectSuccess = data => ({
  type: EventDataActions.UPDATE_DATA_CONNECT_SUCCESS,
  payload: data,
})

export const updateDataConnectFailure = errorMessage => ({
  type: EventDataActions.UPDATE_DATA_CONNECT_FAILURE,
  payload: errorMessage,
})
