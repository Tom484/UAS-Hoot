import EventPlayersActions from "./eventPlayersTypes"
import { playersArrayToObject } from "./eventPlayersUtils"

const initialState = {
  players: {},
  errorMessage: "",
  isUpdating: false,
}

const eventPlayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventPlayersActions.UPDATE_PLAYERS_LOCAL:
      return { ...state, players: playersArrayToObject(action.payload) }

    case EventPlayersActions.UPDATE_PLAYERS_START:
      return { ...state, isUpdating: true, errorMessage: "" }
    case EventPlayersActions.UPDATE_PLAYERS_SUCCESS:
      return {
        ...state,
        players: action.payload,
        isUpdating: false,
        errorMessage: "",
      }
    case EventPlayersActions.UPDATE_PLAYERS_FAILURE:
      return { ...state, errorMessage: action.payload, isUpdating: false }
    default:
      return state
  }
}

export default eventPlayersReducer
