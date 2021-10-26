import CollectionActions from "./collectionsTypes"
import {
  createCollection,
  editCollection,
  deleteCollection,
  addSlideQuiz,
  editSlide,
  duplicateSlide,
  deleteSlide,
  editOption,
} from "./collectionsUtils"

const INITIAL_STATE = {
  userCollections: {},
  editCollectionId: "",
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
  const userCollections = state.userCollections

  switch (action.type) {
    case CollectionActions.CREATE_COLLECTION:
      return {
        ...state,
        userCollections: createCollection(userCollections, action.payload),
      }

    case CollectionActions.EDIT_COLLECTION:
      return {
        ...state,
        userCollections: editCollection(userCollections, action.payload),
      }

    case CollectionActions.DELETE_COLLECTION:
      return {
        ...state,
        userCollections: deleteCollection(userCollections, action.payload),
      }

    case CollectionActions.ADD_SLIDE_QUIZ:
      return {
        ...state,
        userCollections: addSlideQuiz(userCollections, action.payload),
      }

    case CollectionActions.ADD_SLIDE_TRUE_FALSE:
      return state

    case CollectionActions.EDIT_SLIDE:
      return {
        ...state,
        userCollections: editSlide(userCollections, action.payload),
      }

    case CollectionActions.DUPLICATE_SLIDE:
      return {
        ...state,
        userCollections: duplicateSlide(userCollections, action.payload),
      }

    case CollectionActions.DELETE_SLIDE:
      return {
        ...state,
        userCollections: deleteSlide(userCollections, action.payload),
      }

    case CollectionActions.EDIT_OPTION:
      return {
        ...state,
        userCollections: editOption(userCollections, action.payload),
      }

    default:
      return state
  }
}

export default collectionsReducer
