import EventHostActions from "./eventHostTypes"

const initialState = {}

const eventHostReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventHostActions.CREATE_EVENT_START:
      return state
    case EventHostActions.CREATE_EVENT_SUCCESS:
      return state
    case EventHostActions.CREATE_EVENT_FAILURE:
      return state
    default:
      return state
  }
}

export default eventHostReducer
