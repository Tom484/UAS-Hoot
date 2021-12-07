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
  selectEventDataEvent,
} from "./eventDataSelectors"
import {
  createCollectionRef,
  createConnectRef,
  createEventRef,
  createHostRef,
  eventDataTemplate,
} from "./eventDataTemplates"

import EventDataActions, { STATUS_TYPES } from "./eventDataTypes"

export function* createEventAsync({ payload: { collectionId, history } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const collection = yield select(selectUserCollection(collectionId))

    // const enterCode = Math.round(Math.random() * 1000000).toString()
    const enterCode = "1000"
    const event = yield eventDataTemplate(collection, enterCode, currentUser)

    const collectionRef = yield createCollectionRef(enterCode)
    const connectRef = yield createConnectRef(enterCode)
    const eventRef = yield createEventRef(enterCode)
    const adminRef = yield createHostRef(enterCode)

    const batch = firestore.batch()
    yield batch.set(collectionRef, event.collection)
    yield batch.set(connectRef, event.connect)
    yield batch.set(eventRef, event.event)
    yield batch.set(adminRef, event.host)
    yield batch.commit()

    yield put(createEventSuccess(event))
    yield history.push("/event")
  } catch (error) {
    yield put(createEventFailure(error.message))
  }
}

// lobby, slideStart, slideVote, slideResults ,overallResults
export function* startEventAsync() {
  try {
    const collection = yield select(selectEventDataCollection)
    const eventDataConnect = yield select(selectEventDataConnect)
    let event = yield select(selectEventDataEvent)

    const id = collection.slidesOrder[0]
    const date = new Date().getTime()
    const slide = collection.slides[id]

    event = {
      ...event,
      slideId: id,
      slideIndex: 0,
      status: STATUS_TYPES.GAME,
      slideType: slide.type,
      openVoteAt: date + 8000,
      closeVoteAt: date + 8000 + slide.time.value * 1000,
    }

    const eventRef = yield createEventRef(eventDataConnect.enterCode)
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

export function* eventNextSlideAsync() {
  try {
    const collection = yield select(selectEventDataCollection)
    const eventDataConnect = yield select(selectEventDataConnect)
    let event = yield select(selectEventDataEvent)

    const id = collection?.slidesOrder[event?.slideIndex + 1]
    const date = new Date().getTime()
    const slide = collection.slides[id]

    if (id) {
      event = {
        ...event,
        slideId: id,
        lastDataUpdateSlideIndex: event.lastDataUpdateSlideIndex + 1,
        status: STATUS_TYPES.GAME,
        slideType: slide.type,
        openVoteAt: date + 8000,
        closeVoteAt: date + 8000 + slide.time.value * 1000,
      }
    } else {
      event = {
        ...event,
        status: STATUS_TYPES.OVERALL_RESULTS,
      }
    }

    const eventRef = yield createEventRef(eventDataConnect.enterCode)

    const answersRef = yield firestore
      .collection(`events`)
      .doc(eventDataConnect.enterCode)
      .collection("answers")
    const snapshot = yield answersRef.get()
    const batch = firestore.batch()
    if (snapshot.size !== 0) {
      snapshot.docs.forEach(doc => {
        batch.delete(doc.ref)
      })
      yield batch.commit()
    }

    yield eventRef.set({ ...event })
    yield put(eventNextSlideSuccess(event))
  } catch (error) {
    yield put(eventNextSlideFailure(error.message))
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

export function* eventNextSlideStart() {
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
