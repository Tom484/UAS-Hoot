import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { selectUserCollection } from "../collections/collectionsSelectors"
import { selectCurrentUser } from "../user/userSelectors"
import { createEventFailure, createEventSuccess } from "./eventHostActions"
import EventHostActions from "./eventHostTypes"

function playersListener(enterCode) {
  firestore
    .collection(`events`)
    .doc(enterCode)
    .collection("players")
    .onSnapshot(snapshot => {
      const players = snapshot.docs.map(doc => doc.data())

      // put(createEventFailure("no failure"))
      console.log(players)
    })
}

export function* createEventAsync({ payload: { collectionId, history } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const collection = yield select(selectUserCollection(collectionId))
    const enterCode = Math.round(Math.random() * 1000000).toString()
    const properties = {
      collection: {
        collection,
      },
      connect: {
        enterCode,
        isOpen: true,
      },
      event: {
        currentSlide: { id: "lobby" },
      },
      host: {
        id: currentUser.id,
        displayName: currentUser.displayName,
      },
    }
    const batch = firestore.batch()
    const collectionRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("properties")
      .doc("collection")
    const connectRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("properties")
      .doc("connect")
    const eventRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("properties")
      .doc("event")
    const hostRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("properties")
      .doc("host")

    yield batch.set(collectionRef, { ...properties.collection })
    yield batch.set(connectRef, { ...properties.connect })
    yield batch.set(eventRef, { ...properties.event })
    yield batch.set(hostRef, { ...properties.host })
    yield batch.commit()

    playersListener()
    yield put(createEventSuccess({ properties, answer: {}, players: {} }))
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
