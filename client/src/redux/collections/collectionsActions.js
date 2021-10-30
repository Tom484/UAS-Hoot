import CollectionActions from "./collectionsTypes"

export const deleteCollectionStart = id => ({
  type: CollectionActions.DELETE_COLLECTION_START,
  payload: id,
})

export const deleteCollectionSuccess = collections => ({
  type: CollectionActions.DELETE_COLLECTION_SUCCESS,
  payload: collections,
})

export const deleteCollectionFailure = errorMessage => ({
  type: CollectionActions.DELETE_COLLECTION_FAILURE,
  payload: errorMessage,
})

export const createCollectionStart = properties => ({
  type: CollectionActions.CREATE_COLLECTION_START,
  payload: properties,
})

export const createCollectionSuccess = collections => ({
  type: CollectionActions.CREATE_COLLECTION_SUCCESS,
  payload: collections,
})

export const createCollectionFailure = errorMessage => ({
  type: CollectionActions.CREATE_COLLECTION_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStart = currentUser => ({
  type: CollectionActions.FETCH_COLLECTIONS_START,
  payload: currentUser,
})

export const fetchCollectionsSuccess = collections => ({
  type: CollectionActions.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
})

export const fetchCollectionsFailure = errorMessage => ({
  type: CollectionActions.FETCH_COLLECTIONS_FAILURE,
  error: errorMessage,
})

export const saveCollectionStart = id => ({
  type: CollectionActions.SAVE_COLLECTION_START,
  payload: id,
})

export const saveCollectionSuccess = collections => ({
  type: CollectionActions.SAVE_COLLECTION_SUCCESS,
  payload: collections,
})

export const saveCollectionFailure = error => ({
  type: CollectionActions.SAVE_COLLECTION_FAILURE,
  payload: error,
})
