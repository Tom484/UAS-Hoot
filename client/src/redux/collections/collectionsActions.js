import CollectionActions from "./collectionsTypes"

// createCollection
export const createCollection = properties => ({
  type: CollectionActions.CREATE_COLLECTION,
  payload: properties,
})

// editCollection
export const editCollection = idAndProperties => ({
  type: CollectionActions.EDIT_COLLECTION,
  payload: idAndProperties,
})

// removeCollection
export const deleteCollection = id => ({
  type: CollectionActions.DELETE_COLLECTION,
  payload: id,
})

// addCollectionQuestion
export const addSlideQuiz = id => ({
  type: CollectionActions.ADD_SLIDE_QUIZ,
  payload: id,
})

export const addSlideTrueFalse = id => ({
  type: CollectionActions.ADD_SLIDE_TRUE_FALSE,
  payload: id,
})

// editCollectionQuestion
export const editSlide = idsAndProperties => ({
  type: CollectionActions.EDIT_SLIDE,
  payload: idsAndProperties,
})

// duplicateCollectionQuestion
export const duplicateSlide = ids => ({
  type: CollectionActions.DUPLICATE_SLIDE,
  payload: ids,
})

// removeCollectionQuestion
export const deleteSlide = ids => ({
  type: CollectionActions.DELETE_SLIDE,
  payload: ids,
})

// editCollectionAnswer
export const editOption = idsAndProperties => ({
  type: CollectionActions.EDIT_OPTION,
  payload: idsAndProperties,
})
