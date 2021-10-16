import UserCollectionsActionTypes from "./userCollectionsTypes"
import { createCollection } from "./userCollectionsUtils"

const INITIAL_STATE = {
  collections: {},
}

const userCollectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserCollectionsActionTypes.CREATE_COLLECTION:
      return {
        ...state,
        collections: createCollection(state.collections, action.payload),
      }

    default:
      return state
  }
}

export default userCollectionsReducer
