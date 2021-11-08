import { createSelector } from "reselect"

const selectAnswers = state => state.eventAnswers

export const selectEventAnswers = createSelector([selectAnswers], answers => answers.answers)
