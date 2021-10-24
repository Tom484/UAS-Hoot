import CollectionActions from "./collectionsTypes"
import {
  createCollection,
  editCollection,
  editCollectionAnswer,
  editCollectionQuestion,
  removeCollectionQuestion,
  addCollectionQuestion,
  removeCollection,
  duplicateCollectionQuestion,
} from "./collectionsUtils"

const INITIAL_STATE = {
  userCollections: {},
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActions.CREATE_COLLECTION:
      return {
        ...state,
        userCollections: createCollection(state.userCollections, action.payload),
      }
    case CollectionActions.EDIT_COLLECTION:
      return {
        ...state,
        userCollections: editCollection(state.userCollections, action.payload),
      }
    case CollectionActions.REMOVE_COLLECTION:
      return {
        ...state,
        userCollections: removeCollection(state.userCollections, action.payload),
      }
    case CollectionActions.EDIT_COLLECTION_QUESTION:
      return {
        ...state,
        userCollections: editCollectionQuestion(state.userCollections, action.payload),
      }
    case CollectionActions.ADD_COLLECTION_QUESTION:
      return {
        ...state,
        userCollections: addCollectionQuestion(state.userCollections, action.payload),
      }
    case CollectionActions.REMOVE_COLLECTION_QUESTION:
      return {
        ...state,
        userCollections: removeCollectionQuestion(state.userCollections, action.payload),
      }
    case CollectionActions.DUPLICATE_COLLECTION_QUESTION:
      return {
        ...state,
        userCollections: duplicateCollectionQuestion(state.userCollections, action.payload),
      }
    case CollectionActions.EDIT_COLLECTION_ANSWER:
      return {
        ...state,
        userCollections: editCollectionAnswer(state.userCollections, action.payload),
      }

    default:
      return state
  }
}

export default collectionsReducer
