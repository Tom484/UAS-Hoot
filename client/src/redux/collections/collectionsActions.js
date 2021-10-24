import CollectionActions from "./collectionsTypes"

export const createCollection = properties => ({
  type: CollectionActions.CREATE_COLLECTION,
  payload: properties,
})

export const editCollection = idsAndProperties => ({
  type: CollectionActions.EDIT_COLLECTION,
  payload: idsAndProperties,
})

export const removeCollection = id => ({
  type: CollectionActions.REMOVE_COLLECTION,
  payload: id,
})

export const editCollectionQuestion = idsAndProperties => ({
  type: CollectionActions.EDIT_COLLECTION_QUESTION,
  payload: idsAndProperties,
})

export const addCollectionQuestion = id => ({
  type: CollectionActions.ADD_COLLECTION_QUESTION,
  payload: id,
})

export const removeCollectionQuestion = ids => ({
  type: CollectionActions.REMOVE_COLLECTION_QUESTION,
  payload: ids,
})

export const duplicateCollectionQuestion = ids => ({
  type: CollectionActions.DUPLICATE_COLLECTION_QUESTION,
  payload: ids,
})

export const editCollectionAnswer = idsAndProperties => ({
  type: CollectionActions.EDIT_COLLECTION_ANSWER,
  payload: idsAndProperties,
})
