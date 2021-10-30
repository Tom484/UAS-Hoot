import CollectionActions from "./collectionsTypes"
import { createCollection, editCollection, deleteCollection } from "./collectionsUtils"

const INITIAL_STATE = {
  userCollections: {},
  isFetching: false,
  errorMessage: undefined,
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
    case CollectionActions.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true }
    case CollectionActions.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, userCollections: action.payload, isFetching: false }
    case CollectionActions.FETCH_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false }
    default:
      return state
  }
}

export default collectionsReducer
