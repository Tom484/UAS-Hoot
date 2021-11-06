import EventPlayersActions from "./eventPlayersTypes"

export const updatePlayers = properties => ({
  type: EventPlayersActions.UPDATE_PLAYERS,
  payload: properties,
})
