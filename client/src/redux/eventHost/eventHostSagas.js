import { all, call, takeLatest } from "redux-saga/effects"
import EventHostActions from "./eventHostTypes"

export function* createEventAsync() {
  try {
    yield console.log("create event")
  } catch (error) {}
}

export function* createEventStart() {
  yield takeLatest(EventHostActions.CREATE_EVENT_START, createEventAsync)
}

export function* eventHostSagas() {
  yield all([call(createEventStart)])
}
