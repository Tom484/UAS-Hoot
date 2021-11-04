import EventHostActions from "./eventHostTypes"
import { updatePlayers } from "./eventHostUtils"

const initialState = {
  event: undefined,
  isCreatingEvent: false,
  errorMessage: undefined,
}

const eventHostReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventHostActions.CREATE_EVENT_START:
      return { ...state, isCreatingEvent: true, errorMessage: undefined }
    case EventHostActions.CREATE_EVENT_SUCCESS:
      return { ...state, isCreatingEvent: false, errorMessage: undefined, event: action.payload }
    case EventHostActions.CREATE_EVENT_FAILURE:
      return { ...state, isCreatingEvent: false, errorMessage: action.payload }
    case EventHostActions.UPDATE_PLAYERS: {
      return { ...state, event: updatePlayers(state.event, action.payload) }
    }
    default:
      return state
  }
}

export default eventHostReducer
