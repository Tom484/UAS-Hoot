import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { selectEventAnswers, selectEventAnswersArray } from "../eventAnswers/eventAnswersSelectors"
import {
  selectEventCurrentSlide,
  selectEventCurrentSlideOptionsArray,
  selectEventDataEvent,
} from "../eventData/eventDataSelectors"
import { updatePlayersStart } from "../eventPlayers/eventPlayersActions"
import { selectEventPlayersArray } from "../eventPlayers/eventPlayersSelectors"
import { getEventQuizResults, getUpdatedPlayers } from "./eventAnalyzeUtils"

import { analyzeAnswersFailure, analyzeAnswersSuccess } from "./eventResultsActions"
import EventResultsActions from "./eventResultsTypes"

export function* analyzeAnswersAsync() {
  try {
    const playersArray = yield select(selectEventPlayersArray)
    const optionsArray = yield select(selectEventCurrentSlideOptionsArray)
    const answers = yield select(selectEventAnswers)
    const answersArray = yield select(selectEventAnswersArray)
    const event = yield select(selectEventDataEvent)
    const slide = yield select(selectEventCurrentSlide)

    const updatedPlayers = getUpdatedPlayers(playersArray, optionsArray, answers, slide, event)
    const eventResults = getEventQuizResults(optionsArray, answersArray)

    yield put(analyzeAnswersSuccess(eventResults))
    yield put(updatePlayersStart(updatedPlayers))
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
