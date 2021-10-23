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

export const addCollectionQuestion = id => ({
  type: CollectionActions.ADD_COLLECTION_QUESTION,
  payload: id,
})

export const removeCollectionQuestion = ids => ({
  type: CollectionActions.REMOVE_COLLECTION_QUESTION,
  payload: ids,
})

export const editCollectionAnswer = idsAndProperties => ({
  type: CollectionActions.EDIT_COLLECTION_ANSWER,
  payload: idsAndProperties,
})
