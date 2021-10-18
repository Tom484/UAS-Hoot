import CollectionsActionTypes from "./collectionsTypes"
import { createCollection, editCollectionSelectQuestion } from "./collectionsUtils"

const INITIAL_STATE = {
  userCollections: {},
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionsActionTypes.CREATE_COLLECTION:
      return {
        ...state,
        userCollections: createCollection(state.userCollections, action.payload),
      }
    case CollectionsActionTypes.EDIT_COLLECTION_SELECT_QUESTION:
      return {
        ...state,
        userCollections: editCollectionSelectQuestion(state.userCollections, action.payload),
      }

    default:
      return state
  }
}

export default collectionsReducer
