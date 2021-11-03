import { all, call, put, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { joinEventFailure, joinEventSuccess } from "./eventClientActions"
import EventClientActions from "./eventClientTypes"

import uuid from "react-uuid"

export function* joinEventAsync({ payload: { displayName, eventId, history } }) {
  try {
    const collectionRef = yield firestore
      .collection(`events`)
      .doc(eventId)
      .collection("properties")
      .doc("connect")
    const snapshot = yield collectionRef.get()
    const connect = yield snapshot.data()

    const playerId = uuid()
    if (!connect) return put(joinEventFailure("Enter correct eventId"))
    if (!connect.isOpen) return put(joinEventFailure("Event is closed"))

    const playersRef = yield firestore
      .collection(`events`)
      .doc(eventId)
      .collection("players")
      .doc(playerId)

    yield playersRef.set({ id: playerId, displayName, joinAt: new Date().getTime() })

    yield put(joinEventSuccess())
    yield history.push("/event")
  } catch (error) {
    yield put(joinEventFailure(error.message))
  }
}

export function* joinEventStart() {
  yield takeLatest(EventClientActions.JOIN_EVENT_START, joinEventAsync)
}

export function* eventClientSagas() {
  yield all([call(joinEventStart)])
}
