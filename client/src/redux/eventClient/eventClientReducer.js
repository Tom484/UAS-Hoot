import EventClientActions from "./eventClientTypes"

const initialState = {}

const eventClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventClientActions.JOIN_EVENT_START:
      return state
    case EventClientActions.JOIN_EVENT_SUCCESS:
      return state
    case EventClientActions.JOIN_EVENT_FAILURE:
      return state
    default:
      return state
  }
}

export default eventClientReducer
