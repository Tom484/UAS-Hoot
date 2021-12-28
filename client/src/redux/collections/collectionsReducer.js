import CollectionActions from "./collectionsTypes"

const INITIAL_STATE = {
  userCollections: null,
  errorMessage: undefined,
  isLoading: false,
  isFetching: false,
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActions.SAVE_COLLECTION_START:
    case CollectionActions.DELETE_COLLECTION_START:
    case CollectionActions.CREATE_COLLECTION_START:
      return {
        ...state,
        errorMessage: undefined,
        isLoading: true,
      }
    case CollectionActions.FETCH_COLLECTIONS_START:
      return {
        ...state,
        errorMessage: undefined,
        isFetching: true,
      }
    case CollectionActions.SAVE_COLLECTION_SUCCESS:
    case CollectionActions.DELETE_COLLECTION_SUCCESS:
    case CollectionActions.CREATE_COLLECTION_SUCCESS:
      return {
        ...state,
        userCollections: action.payload,
        isLoading: false,
        errorMessage: undefined,
      }
    case CollectionActions.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        userCollections: action.payload,
        isFetching: false,
        errorMessage: undefined,
      }
    case CollectionActions.SAVE_COLLECTION_FAILURE:
    case CollectionActions.DELETE_COLLECTION_FAILURE:
    case CollectionActions.CREATE_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      }
    case CollectionActions.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      }
    default:
      return state
  }
}

export default collectionsReducer
