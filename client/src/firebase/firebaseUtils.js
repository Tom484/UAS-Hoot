import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
}

// eslint-disable-next-line
firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        uid: userAuth.uid,
        createdAt,
        ...additionalData,
      })
    } catch (e) {
      console.log("error creating user", e.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = (object, userAuth) => {
  if (!userAuth) return
  const userRef = firestore.doc(`collections/${userAuth.uid}/`)
  userRef.update(object)
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
