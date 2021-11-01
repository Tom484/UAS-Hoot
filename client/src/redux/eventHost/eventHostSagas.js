import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { selectUserCollection } from "../collections/collectionsSelectors"
import { selectCurrentUser } from "../user/userSelectors"
import { createEventFailure, createEventSuccess } from "./eventHostActions"
import EventHostActions from "./eventHostTypes"

export function* createEventAsync({ payload }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const collection = yield select(selectUserCollection(payload.collectionId))
    const event = {
      collection,
      players: [],
      gameEnterCode: Math.round(Math.random() * 1000000),
      host: currentUser,
      isOpen: true,
    }
    console.log(event)
    const collectionRef = yield firestore.collection(`events`).doc(currentUser.id)
    yield collectionRef.set({ ...event })
    yield put(createEventSuccess(event))
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
