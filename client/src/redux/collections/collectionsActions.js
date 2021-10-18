import CollectionsActionTypes from "./collectionsTypes"

export const createCollection = nameAndCreatorName => ({
  type: CollectionsActionTypes.CREATE_COLLECTION,
  payload: nameAndCreatorName,
})

export const editCollection = idAndProperties => ({
  type: CollectionsActionTypes.EDIT_COLLECTION,
  payload: idAndProperties,
})

export const removeCollection = id => ({
  type: CollectionsActionTypes.REMOVE_COLLECTION,
  payload: id,
})

export const addCollectionSelectQuestion = collectionId => ({
  type: CollectionsActionTypes.ADD_COLLECTION_SELECT_QUESTION,
  payload: collectionId,
})

export const editCollectionSelectQuestion = idsAndProperties => ({
  type: CollectionsActionTypes.EDIT_COLLECTION_SELECT_QUESTION,
  payload: idsAndProperties,
})

export const removeCollectionSelectQuestion = ids => ({
  type: CollectionsActionTypes.REMOVE_COLLECTION_SELECT_QUESTION,
  payload: ids,
})

export const editCollectionSelectAnswer = idsAndProperties => ({
  type: CollectionsActionTypes.EDIT_COLLECTION_SELECT_ANSWER,
  payload: idsAndProperties,
})
