import { createSelector } from "reselect"

const selectAnswers = state => state.eventAnswers

export const selectEventAnswers = createSelector([selectAnswers], answers => answers.answers)

export const selectEventAnswersArray = createSelector(
  [selectEventAnswers],
  answers => Object?.values(answers) || []
)

export const selectEventAnswersLength = createSelector(
  [selectEventAnswersArray],
  answersArray => answersArray?.length || 0
)
