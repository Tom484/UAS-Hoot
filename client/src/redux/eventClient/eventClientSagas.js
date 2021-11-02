import { all, call, put, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { joinEventFailure, joinEventSuccess } from "./eventClientActions"
import EventClientActions from "./eventClientTypes"

export function* joinEventAsync({ payload: { displayName, eventId } }) {
  try {
    console.log(displayName, eventId)

    const collectionRef = yield firestore.collection(`events`).doc(eventId)
    const snapshot = yield collectionRef.get()
    const event = yield snapshot.data()
    if (!event) {
      return put(joinEventSuccess())
    }

    event.players.push({ displayName, id: 9, joinAt: new Date().getTime(), answers: [] })
    console.log(event)
    yield put(joinEventSuccess())
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
