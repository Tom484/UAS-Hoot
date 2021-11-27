import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { selectEventAnswers } from "../eventAnswers/eventAnswersSelectors"
import { selectEventDataEvent } from "../eventData/eventDataSelectors"
import { selectEventPlayers, selectEventPlayersArray } from "../eventPlayers/eventPlayersSelectors"

import { analyzeAnswersFailure, analyzeAnswersSuccess } from "./eventResultsActions"
import EventResultsActions from "./eventResultsTypes"

export function* analyzeAnswersAsync({ payload }) {
  try {
    const answers = yield select(selectEventAnswers)
    const event = yield select(selectEventDataEvent)
    const players = yield select(selectEventPlayers)
    const playersArray = yield select(selectEventPlayersArray)

    const answersArray = Object.values(answers)
    const optionsArray = Object.values(event.currentSlideData.options)

    const answersData = {}
    optionsArray.forEach((option, i) => (answersData[i] = { ...option, count: 0 }))
    answersArray.forEach(
      data => (answersData[data.option].count = answersData[data.option].count + 1)
    )

    const results = {}
    answersArray.forEach((answer, i) => {
      results[answer.id] = {
        correct: optionsArray[answer.option].correct,
        score: optionsArray[answer.option].correct
          ? Math.round(
              Math.abs(
                answer.submitTime -
                  event.currentSlide.openVoteAt -
                  event.currentSlideData.time.value * 1000
              ) *
                (500 / (event.currentSlideData.time.value * 1000))
            ) + 500
          : 0,
      }
    })

    console.log(results)
    console.log(event)
    console.log(answers)
    console.log(players)
    console.log(playersArray)

    yield put(analyzeAnswersSuccess(answersData))
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
