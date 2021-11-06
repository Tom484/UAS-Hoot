import EventPlayersActions from "./eventPlayersTypes"
import { playersArrayToObject } from "./eventPlayersUtils"

const initialState = {
  players: {},
}

const eventPlayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventPlayersActions.UPDATE_PLAYERS:
      return { ...state, players: playersArrayToObject(action.payload) }
    default:
      return state
  }
}

export default eventPlayersReducer
