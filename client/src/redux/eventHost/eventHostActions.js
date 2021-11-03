import EventHostActions from "./eventHostTypes"

export const createEventStart = id => ({
  type: EventHostActions.CREATE_EVENT_START,
  payload: id,
})

export const createEventSuccess = data => ({
  type: EventHostActions.CREATE_EVENT_SUCCESS,
  payload: data,
})

export const createEventFailure = errorMessage => ({
  type: EventHostActions.CREATE_EVENT_FAILURE,
  payload: errorMessage,
})

export const onPlayersChange = properties => ({
  type: EventHostActions.ON_PLAYERS_CHANGE,
  payload: properties,
})
