import CollectionsActionTypes from "./collectionsTypes"
import { createCollection } from "./collectionsUtils"

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

    default:
      return state
  }
}

export default collectionsReducer
