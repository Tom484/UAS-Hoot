import EventClientActions from "./eventClientTypes"

export const joinEventStart = eventId => ({
  type: EventClientActions.JOIN_EVENT_START,
  payload: eventId,
})

export const joinEventSuccess = data => ({
  type: EventClientActions.JOIN_EVENT_SUCCESS,
  payload: data,
})

export const joinEventFailure = errorMessage => ({
  type: EventClientActions.JOIN_EVENT_FAILURE,
  payload: errorMessage,
})
