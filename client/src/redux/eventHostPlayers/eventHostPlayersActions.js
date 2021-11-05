import EventHostPlayersActions from "./eventHostPlayersTypes"

export const updatePlayers = properties => ({
  type: EventHostPlayersActions.UPDATE_PLAYERS,
  payload: properties,
})
