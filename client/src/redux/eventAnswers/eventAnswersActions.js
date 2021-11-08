import EventAnswersActions from "./eventAnswersTypes"

export const updateAnswers = data => ({
  type: EventAnswersActions.UPDATE_ANSWERS,
  payload: data,
})
