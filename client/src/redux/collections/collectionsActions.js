import CollectionActions from "./collectionsTypes"

export const createCollection = nameAndCreatorName => ({
  type: CollectionActions.CREATE_COLLECTION,
  payload: nameAndCreatorName,
})

export const editCollection = idsAndProperties => ({
  type: CollectionActions.CREATE_COLLECTION,
  payload: idsAndProperties,
})

export const editCollectionQuestion = idsAndProperties => ({
  type: CollectionActions.EDIT_COLLECTION_QUESTION,
  payload: idsAndProperties,
})

export const editCollectionAnswer = idsAndProperties => ({
  type: CollectionActions.EDIT_COLLECTION_ANSWER,
  payload: idsAndProperties,
})
