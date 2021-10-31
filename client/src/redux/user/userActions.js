import UserActionTypes from "./userTypes"

export const completedAuthInitialProcess = () => ({
  type: UserActionTypes.COMPLETED_AUTH_INITIAL_PROCESS,
})

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
})

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
})

export const emailSignUpStart = ({ user, additionalData }) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_START,
  payload: { user, additionalData },
})

export const signUpSuccess = user => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
})

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = () => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
})

export const toggleFavoriteCollectionStart = collectionId => ({
  type: UserActionTypes.TOGGLE_FAVORITE_COLLECTION_START,
  payload: collectionId,
})

export const toggleFavoriteCollectionSuccess = currentUser => ({
  type: UserActionTypes.TOGGLE_FAVORITE_COLLECTION_SUCCESS,
  payload: currentUser,
})

export const toggleFavoriteCollectionFailure = errorMessage => ({
  type: UserActionTypes.TOGGLE_FAVORITE_COLLECTION_FAILURE,
  payload: errorMessage,
})
