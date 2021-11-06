import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { selectUserCollection } from "../collections/collectionsSelectors"
import { selectCurrentUser } from "../user/userSelectors"
import {
  createEventFailure,
  createEventSuccess,
  startEventFailure,
  startEventSuccess,
  updatePropertiesConnectFailure,
  updatePropertiesConnectSuccess,
  updatePropertiesEventFailure,
  updatePropertiesEventSuccess,
} from "./eventPropertiesActions"
import {
  selectEventPropertiesConnect,
  selectEventPropertiesEvent,
} from "./eventPropertiesSelectors"
import {
  createCollectionRef,
  createConnectRef,
  createEventRef,
  createAdminRef,
  eventPropertiesTemplate,
} from "./eventPropertiesTemplates"

import EventPropertiesActions from "./eventPropertiesTypes"

export function* createEventAsync({ payload: { collectionId, history } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const collection = yield select(selectUserCollection(collectionId))
    // const enterCode = Math.round(Math.random() * 1000000).toString()
    const enterCode = "1000"

    const properties = yield eventPropertiesTemplate(collection, enterCode, currentUser)

    const collectionRef = yield createCollectionRef(enterCode)
    const connectRef = yield createConnectRef(enterCode)
    const eventRef = yield createEventRef(enterCode)
    const adminRef = yield createAdminRef(enterCode)

    const batch = firestore.batch()
    yield batch.set(collectionRef, { ...properties.collection })
    yield batch.set(connectRef, { ...properties.connect })
    yield batch.set(eventRef, { ...properties.event })
    yield batch.set(adminRef, { ...properties.admin })
    yield batch.commit()

    yield put(createEventSuccess(properties))
    yield history.push("/event")
  } catch (error) {
    yield put(createEventFailure(error.message))
  }
}

// lobby, slideStart, slideVote, slideResults ,overallResults
export function* startEventAsync({ payload }) {
  try {
    console.log("eventStart")
    yield put(startEventSuccess())
  } catch (error) {
    yield put(startEventFailure(error.message))
  }
}

export function* eventPropertiesEventAsync({ payload }) {
  try {
    const eventPropertiesEvent = yield select(selectEventPropertiesEvent)
    const newProperties = yield { ...eventPropertiesEvent, ...payload }
    const connectRef = yield createConnectRef(newProperties.enterCode)
    yield connectRef.update({ ...newProperties })
    yield put(updatePropertiesEventSuccess(newProperties))
  } catch (error) {
    yield put(updatePropertiesEventFailure(error.message))
  }
}

export function* eventPropertiesConnectAsync({ payload: { properties } }) {
  try {
    console.log(properties)
    const eventPropertiesConnect = yield select(selectEventPropertiesConnect)
    if (properties?.isOpen === "toggle") {
      properties.isOpen = !eventPropertiesConnect.isOpen
    }
    const newProperties = yield { ...eventPropertiesConnect, ...properties }
    const connectRef = yield createConnectRef(newProperties.enterCode)
    yield connectRef.update({ ...newProperties })
    yield put(updatePropertiesConnectSuccess(newProperties))
  } catch (error) {
    yield put(updatePropertiesConnectFailure(error.message))
  }
}

export function* createEventStart() {
  yield takeLatest(EventPropertiesActions.CREATE_EVENT_START, createEventAsync)
}

export function* startEventStart() {
  yield takeLatest(EventPropertiesActions.START_EVENT_START, startEventAsync)
}

export function* eventPropertiesEventStart() {
  yield takeLatest(EventPropertiesActions.UPDATE_PROPERTIES_EVENT_START, eventPropertiesEventAsync)
}

export function* eventPropertiesConnectStart() {
  yield takeLatest(
    EventPropertiesActions.UPDATE_PROPERTIES_CONNECT_START,
    eventPropertiesConnectAsync
  )
}

export default function* eventPropertiesSagas() {
  yield all([
    call(createEventStart),
    call(startEventStart),
    call(eventPropertiesEventStart),
    call(eventPropertiesConnectStart),
  ])
}
