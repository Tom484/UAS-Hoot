import UserActionTypes from "./userTypes"

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  completedAuthInitialProcess: false,
  isLoading: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_UP_START:
    case UserActionTypes.SIGN_OUT_START:
    case UserActionTypes.UPDATE_PROFILE_START:
    case UserActionTypes.CHANGE_PASSWORD_START:
    case UserActionTypes.RESET_PASSWORD_EMAIL_START:
      return { ...state, error: null, isLoading: true }
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
        isLoading: false,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isLoading: false,
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.RESET_PASSWORD_EMAIL_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.UPDATE_PROFILE_FAILURE:
    case UserActionTypes.CHANGE_PASSWORD_FAILURE:
    case UserActionTypes.TOGGLE_FAVORITE_COLLECTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case UserActionTypes.TOGGLE_FAVORITE_COLLECTION_SUCCESS:
    case UserActionTypes.UPDATE_PROFILE_SUCCESS:
      return { ...state, currentUser: action.payload, isLoading: false }
    case UserActionTypes.CHANGE_PASSWORD_SUCCESS:
    case UserActionTypes.RESET_PASSWORD_EMAIL_SUCCESS:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default userReducer
