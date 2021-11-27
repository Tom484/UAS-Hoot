import EventResultsActions from "./eventResultsTypes"

const initialState = {
  results: {},
}

const eventResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventResultsActions.ANALYZE_ANSWERS_START:
      return state
    case EventResultsActions.ANALYZE_ANSWERS_SUCCESS:
      return { ...state, results: action.payload }
    case EventResultsActions.ANALYZE_ANSWERS_FAILURE:
      return state
    default:
      return state
  }
}

export default eventResultsReducer
