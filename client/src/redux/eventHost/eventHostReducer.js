import EventHostActions from "./eventHostTypes"

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
    case EventHostActions.ON_PLAYERS_CHANGE: {
      return { ...state }
    }
    default:
      return state
  }
}

export default eventHostReducer
