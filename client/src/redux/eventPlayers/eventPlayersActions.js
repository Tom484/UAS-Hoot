import EventPlayersActions from "./eventPlayersTypes"

export const updatePlayersLocal = properties => ({
  type: EventPlayersActions.UPDATE_PLAYERS_LOCAL,
  payload: properties,
})

export const updatePlayersStart = data => ({
  type: EventPlayersActions.UPDATE_PLAYERS_START,
  payload: data,
})
export const updatePlayersSuccess = data => ({
  type: EventPlayersActions.UPDATE_PLAYERS_SUCCESS,
  payload: data,
})
export const updatePlayersFailure = errorMessage => ({
  type: EventPlayersActions.UPDATE_PLAYERS_FAILURE,
  payload: errorMessage,
})
