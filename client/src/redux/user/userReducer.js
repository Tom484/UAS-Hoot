import UserActionTypes from "./userTypes"

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  completedAuthInitialProcess: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.COMPLETED_AUTH_INITIAL_PROCESS:
      return {
        ...state,
        completedAuthInitialProcess: true,
      }
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.UPDATE_PROFILE_FAILURE:
    case UserActionTypes.CHANGE_PASSWORD_FAILURE:
    case UserActionTypes.TOGGLE_FAVORITE_COLLECTION_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case UserActionTypes.TOGGLE_FAVORITE_COLLECTION_SUCCESS:
    case UserActionTypes.UPDATE_PROFILE_SUCCESS:
      return { ...state, currentUser: action.payload }
    case UserActionTypes.CHANGE_PASSWORD_SUCCESS:
      return { ...state }
    default:
      return state
  }
}

export default userReducer
