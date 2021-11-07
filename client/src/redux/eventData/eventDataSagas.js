import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { selectUserCollection } from "../collections/collectionsSelectors"
import { selectCurrentUser } from "../user/userSelectors"
import {
  createEventFailure,
  createEventSuccess,
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
  selectEventDataEvent,
} from "./eventDataSelectors"
import {
  createCollectionRef,
  createConnectRef,
  createEventRef,
  createAdminRef,
  eventDataTemplate,
} from "./eventDataTemplates"

import EventDataActions from "./eventDataTypes"

export function* createEventAsync({ payload: { collectionId, history } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const collection = yield select(selectUserCollection(collectionId))
    // const enterCode = Math.round(Math.random() * 1000000).toString()
    const enterCode = "1000"
    const data = yield eventDataTemplate(collection, enterCode, currentUser)

    const collectionRef = yield createCollectionRef(enterCode)
    const connectRef = yield createConnectRef(enterCode)
    const eventRef = yield createEventRef(enterCode)
    const adminRef = yield createAdminRef(enterCode)

    const batch = firestore.batch()
    yield batch.set(collectionRef, { ...data.collection })
    yield batch.set(connectRef, { ...data.connect })
    yield batch.set(eventRef, { ...data.event })
    yield batch.set(adminRef, { ...data.admin })
    yield batch.commit()

    yield put(createEventSuccess(data))
    yield history.push("/event")
  } catch (error) {
    yield put(createEventFailure(error.message))
  }
}

// lobby, slideStart, slideVote, slideResults ,overallResults
export function* startEventAsync({ payload }) {
  try {
    const collection = yield select(selectEventDataCollection)
    const eventDataConnect = yield select(selectEventDataConnect)
    const event = yield select(selectEventDataEvent)
    const id = event.slidesOrder[0]
    const date = new Date().getTime()
    const slide = collection.slides[id]

    const eventRef = yield createEventRef(eventDataConnect.enterCode)

    event.currentSlide = {
      id,
      index: 0,
      type: "game",
      gameType: slide.type,
      openVoteAt: date + 5000,
      closeVoteAt: date + 5000 + slide.time.value * 1000,
    }
    event.currentSlideData = slide

    yield eventRef.set({ ...event })
    yield put(startEventSuccess(event))
  } catch (error) {
    yield put(startEventFailure(error.message))
  }
}

export function* eventDataEventAsync({ payload }) {
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

export function* eventDataConnectAsync({ payload: { data } }) {
  try {
    console.log(data)
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

export function* createEventStart() {
  yield takeLatest(EventDataActions.CREATE_EVENT_START, createEventAsync)
}

export function* startEventStart() {
  yield takeLatest(EventDataActions.START_EVENT_START, startEventAsync)
}

export function* eventDataEventStart() {
  yield takeLatest(EventDataActions.UPDATE_DATA_EVENT_START, eventDataEventAsync)
}

export function* eventDataConnectStart() {
  yield takeLatest(EventDataActions.UPDATE_DATA_CONNECT_START, eventDataConnectAsync)
}

export default function* eventDataSagas() {
  yield all([
    call(createEventStart),
    call(startEventStart),
    call(eventDataEventStart),
    call(eventDataConnectStart),
  ])
}
