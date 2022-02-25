import { takeLatest, put, all, call, takeEvery, select } from "redux-saga/effects"

import UserActionTypes from "./userTypes"

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
  firestore,
} from "../../firebase/firebaseUtils"

import {
  changePasswordFailure,
  changePasswordSuccess,
  completedAuthInitialProcess,
  resetPasswordEmailFailure,
  resetPasswordEmailSuccess,
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
  toggleFavoriteCollectionFailure,
  toggleFavoriteCollectionSuccess,
  updateProfileFailure,
  updateProfileSuccess,
} from "./userActions"
import { selectCurrentUser } from "./userSelectors"
import { deleteReference } from "../../functions/redux/reduxFunctions"
import { createNotification } from "../notifications/notificationsActions"
import { NOTIFICATIONS } from "../notifications/notificationsTypes"

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(createNotification(NOTIFICATIONS.SIGN_IN_WITH_GOOGLE_FAILURE))
    yield put(signInFailure(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(createNotification(NOTIFICATIONS.SIGN_IN_WITH_EMAIL_FAILURE))
    yield put(signInFailure(error))
  }
}

export function* signUpWithEmail({
  payload: {
    user: { email, password },
    additionalData: { displayName },
  },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(signUpSuccess({ user, additionalData: { displayName } }))
  } catch (error) {
    yield put(createNotification(NOTIFICATIONS.SIGN_UP_WITH_EMAIL_FAILURE))
    yield put(signUpFailure(error))
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData)
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (userAuth) {
      yield getSnapshotFromUserAuth(userAuth)
    }
    yield put(completedAuthInitialProcess())
  } catch (error) {
    put(signInFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
    document.location.reload()
  } catch (error) {
    yield put(createNotification(NOTIFICATIONS.SIGN_OUT_FAILURE))
    yield put(signOutFailure(error))
  }
}

export function* toggleFavoriteCollection({ payload: { collectionId } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const favoritesArray = yield currentUser?.favorites || []
    const favoriteIndex = yield favoritesArray.indexOf(collectionId)

    favoriteIndex !== -1
      ? favoritesArray.splice(favoriteIndex, 1)
      : favoritesArray.push(collectionId)

    const collectionRef = yield firestore.doc(`users/${currentUser.id}`)
    yield collectionRef.update({ favorites: favoritesArray })
    currentUser.favoritesArray = favoritesArray

    yield put(toggleFavoriteCollectionSuccess(deleteReference(currentUser)))
  } catch (error) {
    yield put(toggleFavoriteCollectionFailure(error.message))
  }
}

export function* updateProfile({ payload }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const collectionRef = yield firestore.doc(`users/${currentUser.id}`)
    yield collectionRef.update({ ...payload })

    yield put(createNotification(NOTIFICATIONS.UPDATE_PROFILE_SUCCESS))
    yield put(updateProfileSuccess({ ...currentUser, ...payload }))
  } catch (error) {
    yield put(createNotification(NOTIFICATIONS.UPDATE_PROFILE_FAILURE))
    yield put(updateProfileFailure(error.message))
  }
}

export function* changePassword({ payload }) {
  try {
    yield auth.currentUser.updatePassword(payload.password)
    yield put(createNotification(NOTIFICATIONS.UPDATE_PASSWORD_SUCCESS))
    yield put(changePasswordSuccess())
  } catch (error) {
    yield put(createNotification(NOTIFICATIONS.UPDATE_PASSWORD_FAILURE))
    yield put(changePasswordFailure(error.message))
  }
}

export function* resetPasswordEmail({ payload }) {
  try {
    yield auth.sendPasswordResetEmail(payload)
    yield put(createNotification(NOTIFICATIONS.RESET_PASSWORD_EMAIL_SUCCESS))
    yield put(resetPasswordEmailSuccess())
  } catch (error) {
    yield put(resetPasswordEmailFailure(error.message))
    yield put(createNotification(NOTIFICATIONS.RESET_PASSWORD_EMAIL_FAILURE))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onEmailSignUpStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, signUpWithEmail)
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onToggleFavoriteCollection() {
  yield takeEvery(UserActionTypes.TOGGLE_FAVORITE_COLLECTION_START, toggleFavoriteCollection)
}

export function* onUpdateProfile() {
  yield takeLatest(UserActionTypes.UPDATE_PROFILE_START, updateProfile)
}
export function* onChangePassword() {
  yield takeLatest(UserActionTypes.CHANGE_PASSWORD_START, changePassword)
}
export function* onResetPasswordEmail() {
  yield takeLatest(UserActionTypes.RESET_PASSWORD_EMAIL_START, resetPasswordEmail)
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onEmailSignUpStart),
    call(onSignUpSuccess),
    call(isUserAuthenticated),
    call(onSignOut),
    call(onToggleFavoriteCollection),
    call(onUpdateProfile),
    call(onChangePassword),
    call(onResetPasswordEmail),
  ])
}
