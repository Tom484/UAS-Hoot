import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { selectUserCollection } from "../collections/collectionsSelectors"
import { selectCurrentUser } from "../user/userSelectors"
import {
  createEventFailure,
  createEventSuccess,
  eventNextSlideFailure,
  eventNextSlideSuccess,
  startEventFailure,
  startEventSuccess,
  updateDataConnectFailure,
  updateDataConnectSuccess,
  updateDataEventFailure,
  updateDataEventSuccess,
} from "./eventDataActions"
import {
  selectEventDataCollection,
  selectEventDataConnect,
  selectEventDataConnectEnterCode,
  selectEventDataEvent,
  selectEventDataHostTimeDifference,
} from "./eventDataSelectors"
import { createConnectRef } from "./eventDataTemplates"

import EventDataActions from "./eventDataTypes"
import { createNewEvent, updateToNextEvent, updateToStartEvent } from "./eventDataUtils"

function* createEventAsync({ payload: { collectionId, history } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const collection = yield select(selectUserCollection(collectionId))

    const event = yield createNewEvent(currentUser, collection)
    const { enterCode } = event.connect

    const batch = firestore.batch()
    yield batch.set(firestore.doc(`events/${enterCode}/data/collection`), event.collection)
    yield batch.set(firestore.doc(`events/${enterCode}/data/connect`), event.connect)
    yield batch.set(firestore.doc(`events/${enterCode}/data/event`), event.event)
    yield batch.set(firestore.doc(`events/${enterCode}/data/host`), event.host)
    yield batch.commit()

    yield put(createEventSuccess(event))
    yield history.push("/event")
  } catch (error) {
    yield put(createEventFailure(error.message))
  }
}

function* startEventAsync() {
  try {
    const collection = yield select(selectEventDataCollection)
    const enterCode = yield select(selectEventDataConnectEnterCode)
    const hostTimeDifference = yield select(selectEventDataHostTimeDifference)
    const preEvent = yield select(selectEventDataEvent)

    const event = updateToStartEvent(collection, hostTimeDifference, preEvent)

    const eventRef = yield firestore.doc(`events/${enterCode}/data/event`)
    yield eventRef.set(event)

    yield put(startEventSuccess(event))
  } catch (error) {
    yield put(startEventFailure(error.message))
  }
}

function* eventDataEventAsync({ payload }) {
  try {
    const eventDataEvent = yield select(selectEventDataEvent)
    const newData = yield { ...eventDataEvent, ...payload }

    const connectRef = yield createConnectRef(newData.enterCode)
    yield connectRef.update({ ...newData })

    yield put(updateDataEventSuccess(newData))
  } catch (error) {
    yield put(updateDataEventFailure(error.message))
  }
}

function* eventDataConnectAsync({ payload: { data } }) {
  try {
    const eventDataConnect = yield select(selectEventDataConnect)
    if (data?.isOpen === "toggle") {
      data.isOpen = !eventDataConnect.isOpen
    }

    const newData = yield { ...eventDataConnect, ...data }
    const connectRef = yield createConnectRef(newData.enterCode)
    yield connectRef.update({ ...newData })

    yield put(updateDataConnectSuccess(newData))
  } catch (error) {
    yield put(updateDataConnectFailure(error.message))
  }
}

function* eventNextSlideAsync() {
  try {
    const collection = yield select(selectEventDataCollection)
    const enterCode = yield select(selectEventDataConnectEnterCode)
    const hostTimeDifference = yield select(selectEventDataHostTimeDifference)
    const preEvent = yield select(selectEventDataEvent)

    const event = updateToNextEvent(collection, hostTimeDifference, preEvent)

    const eventRef = firestore.doc(`events/${enterCode}/data/event`)
    const answersRef = firestore.collection(`events/${enterCode}/answers`)

    const snapshot = yield answersRef.get()

    const batch = firestore.batch()
    if (snapshot.size !== 0) {
      snapshot.docs.forEach(doc => batch.delete(doc.ref))
      yield batch.commit()
    }

    yield eventRef.set(event)
    yield put(eventNextSlideSuccess(event))
  } catch (error) {
    yield put(eventNextSlideFailure(error.message))
  }
}

function* createEventStart() {
  yield takeLatest(EventDataActions.CREATE_EVENT_START, createEventAsync)
}
function* startEventStart() {
  yield takeLatest(EventDataActions.START_EVENT_START, startEventAsync)
}
function* eventDataEventStart() {
  yield takeLatest(EventDataActions.UPDATE_DATA_EVENT_START, eventDataEventAsync)
}
function* eventDataConnectStart() {
  yield takeLatest(EventDataActions.UPDATE_DATA_CONNECT_START, eventDataConnectAsync)
}
function* eventNextSlideStart() {
  yield takeLatest(EventDataActions.EVENT_NEXT_SLIDE_START, eventNextSlideAsync)
}

export default function* eventDataSagas() {
  yield all([
    call(createEventStart),
    call(startEventStart),
    call(eventDataEventStart),
    call(eventDataConnectStart),
    call(eventNextSlideStart),
  ])
}
