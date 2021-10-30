import { takeLatest, put } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./collectionsActions"

import CollectionActions from "./collectionsTypes"

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection(`collections`).doc("afSp6Gd7Y9Sh2HsEAoH6bayZSjx2")
    const snapshot = yield collectionRef.get()
    const collections = yield snapshot.data()
    yield put(fetchCollectionsSuccess(collections))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(CollectionActions.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}
