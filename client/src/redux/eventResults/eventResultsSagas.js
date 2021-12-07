import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { selectEventAnswersArray } from "../eventAnswers/eventAnswersSelectors"
import {
  selectEventCurrentSlideOptionsArray,
  selectEventDataEvent,
} from "../eventData/eventDataSelectors"
import { updatePlayersStart } from "../eventPlayers/eventPlayersActions"
import { selectEventPlayersArray } from "../eventPlayers/eventPlayersSelectors"

import { analyzeAnswersFailure, analyzeAnswersSuccess } from "./eventResultsActions"
import EventResultsActions from "./eventResultsTypes"

export function* analyzeAnswersAsync() {
  try {
    const playersArray = yield select(selectEventPlayersArray)
    const answersArray = yield select(selectEventAnswersArray)
    const optionsArray = yield select(selectEventCurrentSlideOptionsArray)
    const event = yield select(selectEventDataEvent)

    const updatedPlayers = {}
    const answersData = {}
    const results = {}

    optionsArray.forEach((option, i) => (answersData[i] = { ...option, count: 0 }))
    answersArray.forEach(
      data => (answersData[data.option].count = answersData[data.option].count + 1)
    )

    const countScore = answer => {
      const score = optionsArray[answer.option].correct
        ? Math.round(
            Math.abs(
              answer.submitTime -
                event.currentSlide.openVoteAt -
                event.currentSlideData.time.value * 1000
            ) *
              (500 / (event.currentSlideData.time.value * 1000))
          ) + 500
        : 0
      if (score <= 1000) return score
      return 0
    }

    answersArray.forEach(answer => {
      results[answer.id] = {
        correct: optionsArray[answer.option].correct,
        score: countScore(answer),
      }
    })

    playersArray.forEach(player => {
      updatedPlayers[player.id] = {
        ...player,
        lastAnswer: results[player.id]?.correct || false,
        score: (player?.score || 0) + results[player.id]?.score || 0,
        lastScore: results[player.id]?.score || 0,
        lastDataUpdateSlideIndex: event.slideIndex,
      }
    })

    console.log(results)
    console.log(updatedPlayers)

    yield put(analyzeAnswersSuccess(answersData))
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
