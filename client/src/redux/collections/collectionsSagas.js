import { takeLatest, put, all, call, select } from "redux-saga/effects"
import firebase, { firestore } from "../../firebase/firebaseUtils"
import {
  createCollectionFailure,
  createCollectionSuccess,
  deleteCollectionFailure,
  deleteCollectionSuccess,
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
  saveCollectionFailure,
  saveCollectionSuccess,
} from "./collectionsActions"
import { selectUserCollections } from "./collectionsSelectors"
import { deleteCollection } from "./collectionsUtils"
import { createCollection } from "./functions/editCollection"
import uuid from "react-uuid"

import CollectionActions from "./collectionsTypes"
import { selectCurrentUser } from "../user/userSelectors"
import { selectEditorCollection } from "../editor/editorSelectors"

export function* fetchCollectionAsync({ payload }) {
  try {
    const collectionRef = yield firestore.collection(`collections`).doc(payload.id)
    const snapshot = yield collectionRef.get()
    const collections = yield snapshot.data()
    yield put(fetchCollectionsSuccess(collections))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* deleteCollectionAsync({ payload }) {
  try {
    const collectionId = yield payload.collectionId
    const collections = yield select(selectUserCollections)
    const currentUser = yield select(selectCurrentUser)

    const collectionRef = yield firestore.collection(`collections`).doc(currentUser.id)
    yield collectionRef.update({ [collectionId]: firebase.firestore.FieldValue.delete() })
    const newCollections = yield deleteCollection(collections, {
      collectionId: payload.collectionId,
    })

    yield put(deleteCollectionSuccess(newCollections))
  } catch (error) {
    yield put(deleteCollectionFailure(error.message))
  }
}

export function* createCollectionAsync({ payload }) {
  try {
    const { history } = yield payload
    const collectionId = uuid()
    const collections = yield select(selectUserCollections)
    const currentUser = yield select(selectCurrentUser)
    const newCollection = {}

    newCollection[collectionId] = yield createCollection(collectionId, {
      name: "Project",
      author: currentUser.displayName,
      authorId: currentUser.id,
    })
    const collectionRef = yield firestore.collection(`collections`).doc(currentUser.id)
    yield collectionRef.update({ ...newCollection })

    yield put(createCollectionSuccess({ ...collections, ...newCollection }))
    history.push(`/editor/${collectionId}`)
  } catch (error) {
    yield put(createCollectionFailure(error.message))
  }
}

export function* saveCollectionAsync({ payload: { collectionId } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const newCollection = yield select(selectEditorCollection)
    const collections = yield select(selectUserCollections)

    const collectionRef = yield firestore.collection(`collections`).doc(currentUser.id)
    yield collectionRef.update({ [collectionId]: newCollection })

    collections[collectionId] = newCollection
    yield put(saveCollectionSuccess(collections))
  } catch (error) {
    yield put(saveCollectionFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(CollectionActions.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* deleteCollectionStart() {
  yield takeLatest(CollectionActions.DELETE_COLLECTION_START, deleteCollectionAsync)
}

export function* createCollectionStart() {
  yield takeLatest(CollectionActions.CREATE_COLLECTION_START, createCollectionAsync)
}

export function* saveCollectionStart() {
  yield takeLatest(CollectionActions.SAVE_COLLECTION_START, saveCollectionAsync)
}

export function* collectionsSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(deleteCollectionStart),
    call(createCollectionStart),
    call(saveCollectionStart),
  ])
}
