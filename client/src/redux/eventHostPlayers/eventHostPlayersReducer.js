import EventHostPlayersActions from "./eventHostPlayersTypes"
import { playersArrayToObject } from "./eventHostPlayersUtils"

const initialState = {
  players: {},
}

const eventHostPlayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventHostPlayersActions.UPDATE_PLAYERS:
      return { ...state, players: playersArrayToObject(action.payload) }
    default:
      return state
  }
}

export default eventHostPlayersReducer
