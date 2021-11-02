import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { selectUserCollection } from "../collections/collectionsSelectors"
import { selectCurrentUser } from "../user/userSelectors"
import { createEventFailure, createEventSuccess } from "./eventHostActions"
import EventHostActions from "./eventHostTypes"

export function* createEventAsync({ payload: { collectionId, history } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const collection = yield select(selectUserCollection(collectionId))
    const gameEnterCode = Math.round(Math.random() * 1000000).toString()
    const event = {
      collection,
      players: [],
      answers: [],
      currentSlide: { id: "lobby" },
      gameEnterCode,
      host: { id: currentUser.id, displayName: currentUser.displayName },
      isOpen: true,
    }
    console.log(event)
    const collectionRef = yield firestore.collection(`events`).doc(gameEnterCode)
    yield collectionRef.set({ ...event })
    yield put(createEventSuccess(event))
    yield history.push("/event-block")
  } catch (error) {
    yield put(createEventFailure(error.message))
  }
}

export function* createEventStart() {
  yield takeLatest(EventHostActions.CREATE_EVENT_START, createEventAsync)
}

export function* eventHostSagas() {
  yield all([call(createEventStart)])
}
