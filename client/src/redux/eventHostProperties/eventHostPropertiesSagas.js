import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { selectUserCollection } from "../collections/collectionsSelectors"
import { selectCurrentUser } from "../user/userSelectors"
import { createEventFailure, createEventSuccess } from "./eventHostPropertiesActions"
import {
  createCollectionRef,
  createEventRef,
  createHostRef,
  eventPropertiesTemplate,
} from "./eventHostPropertiesTemplates"

import EventHostPropertiesActions from "./eventHostPropertiesTypes"

// function playersListener(enterCode) {
//   firestore
//     .collection(`events`)
//     .doc(enterCode)
//     .collection("players")
//     .onSnapshot(snapshot => {
//       const players = snapshot.docs.map(doc => doc.data())
//       console.log(players)
//     })
// }

export function* createEventAsync({ payload: { collectionId, history } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const collection = yield select(selectUserCollection(collectionId))
    // const enterCode = Math.round(Math.random() * 1000000).toString()
    const enterCode = "1000"

    const properties = yield eventPropertiesTemplate(collection, enterCode, currentUser)

    const collectionRef = yield createCollectionRef()
    const connectRef = yield createCollectionRef()
    const eventRef = yield createEventRef()
    const hostRef = yield createHostRef()

    const batch = firestore.batch()
    yield batch.set(collectionRef, { ...properties.collection })
    yield batch.set(connectRef, { ...properties.connect })
    yield batch.set(eventRef, { ...properties.event })
    yield batch.set(hostRef, { ...properties.host })
    yield batch.commit()

    yield put(createEventSuccess(properties))
    yield history.push("/event-block")
  } catch (error) {
    yield put(createEventFailure(error.message))
  }
}

export function* createEventStart() {
  yield takeLatest(EventHostPropertiesActions.CREATE_EVENT_START, createEventAsync)
}

export function* eventHostPropertiesSagas() {
  yield all([call(createEventStart)])
}
