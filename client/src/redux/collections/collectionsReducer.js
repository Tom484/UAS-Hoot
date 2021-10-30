import CollectionActions from "./collectionsTypes"

const INITIAL_STATE = {
  userCollections: {},
  isFetching: false,
  errorMessage: undefined,
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActions.DELETE_COLLECTION_START:
      return { ...state }
    case CollectionActions.DELETE_COLLECTION_SUCCESS:
    case CollectionActions.CREATE_COLLECTION_SUCCESS:
      return {
        ...state,
        userCollections: action.payload,
        errorMessage: undefined,
      }

    case CollectionActions.DELETE_COLLECTION_FAILURE:
    case CollectionActions.CREATE_COLLECTION_FAILURE:
      return { ...state, errorMessage: action.payload }

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
