import CollectionActions from "./collectionsTypes"

import { firestore } from "../../firebase/firebaseUtils"

export const createCollection = properties => ({
  type: CollectionActions.CREATE_COLLECTION,
  payload: properties,
})

export const editCollection = idAndProperties => ({
  type: CollectionActions.EDIT_COLLECTION,
  payload: idAndProperties,
})

export const deleteCollection = id => ({
  type: CollectionActions.DELETE_COLLECTION,
  payload: id,
})

export const fetchCollectionsStart = () => ({
  type: CollectionActions.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collections => ({
  type: CollectionActions.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
})

export const fetchCollectionsFailure = errorMessage => ({
  type: CollectionActions.FETCH_COLLECTIONS_FAILURE,
  error: errorMessage,
})
