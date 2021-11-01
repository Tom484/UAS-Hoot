import { all, call, takeLatest } from "redux-saga/effects"
import EventClientActions from "./eventClientTypes"

export function* joinEventAsync() {
  try {
    yield console.log("join")
  } catch (error) {}
}

export function* joinEventStart() {
  yield takeLatest(EventClientActions.JOIN_EVENT_START, joinEventAsync)
}

export function* eventClientSagas() {
  yield all([call(joinEventStart)])
}
