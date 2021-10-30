import CollectionActions from "./collectionsTypes"

const INITIAL_STATE = {
  userCollections: {},
  errorMessage: undefined,
  isFetching: false,
  isSaving: false,
  isDeleting: false,
  isCreating: false,
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActions.SAVE_COLLECTION_START:
      return {
        ...state,
        errorMessage: undefined,
        isSaving: true,
      }
    case CollectionActions.SAVE_COLLECTION_SUCCESS:
      return {
        ...state,
        userCollections: action.payload,
        errorMessage: undefined,
        isSaving: false,
      }
    case CollectionActions.SAVE_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isSaving: false,
      }
    case CollectionActions.DELETE_COLLECTION_START:
      return {
        ...state,
        errorMessage: undefined,
        isDeleting: true,
      }
    case CollectionActions.DELETE_COLLECTION_SUCCESS:
      return {
        ...state,
        userCollections: action.payload,
        errorMessage: undefined,
        isDeleting: false,
      }
    case CollectionActions.DELETE_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isDeleting: false,
      }
    case CollectionActions.CREATE_COLLECTION_START:
      return {
        ...state,
        errorMessage: undefined,
        isCreating: true,
      }
    case CollectionActions.CREATE_COLLECTION_SUCCESS:
      return {
        ...state,
        userCollections: action.payload,
        errorMessage: undefined,
        isCreating: false,
      }

    case CollectionActions.CREATE_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isCreating: false,
      }

    case CollectionActions.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: undefined,
      }
    case CollectionActions.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        userCollections: action.payload,
        isFetching: false,
        errorMessage: undefined,
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
