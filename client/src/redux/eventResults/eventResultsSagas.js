import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { selectEventAnswers } from "../eventAnswers/eventAnswersSelectors"
import { selectEventDataEvent } from "../eventData/eventDataSelectors"

import { analyzeAnswersFailure, analyzeAnswersSuccess } from "./eventResultsActions"
import EventResultsActions from "./eventResultsTypes"

export function* analyzeAnswersAsync({ payload }) {
  try {
    const answers = yield select(selectEventAnswers)
    const event = yield select(selectEventDataEvent)
    console.log(event)
    console.log(Object.values(answers))

    yield put(analyzeAnswersSuccess())
  } catch (error) {
    yield put(analyzeAnswersFailure(error.message))
  }
}

export function* analyzeAnswersStart() {
  yield takeLatest(EventResultsActions.ANALYZE_ANSWERS_START, analyzeAnswersAsync)
}

export default function* eventResultSagas() {
  yield all([call(analyzeAnswersStart)])
}
