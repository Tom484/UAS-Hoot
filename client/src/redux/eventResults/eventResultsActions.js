import EventResultsActions from "./eventResultsTypes"

export const analyzeAnswersStart = data => ({
  type: EventResultsActions.ANALYZE_ANSWERS_START,
  payload: data,
})
export const analyzeAnswersSuccess = data => ({
  type: EventResultsActions.ANALYZE_ANSWERS_SUCCESS,
  payload: data,
})
export const analyzeAnswersFailure = data => ({
  type: EventResultsActions.ANALYZE_ANSWERS_FAILURE,
  payload: data,
})
