import { firestore } from "../../firebase/firebaseUtils"

export const eventPropertiesTemplate = (collection, enterCode, currentUser) => {
  return {
    collection: { collection },
    connect: {
      enterCode,
      isOpen: true,
    },
    event: {
      currentSlide: { type: "lobby", id: "" },
    },
    admin: {
      id: currentUser.id,
      displayName: currentUser.displayName,
    },
  }
}

export const createCollectionRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("properties").doc("collection")
export const createConnectRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("properties").doc("connect")
export const createEventRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("properties").doc("event")
export const createAdminRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("properties").doc("admin")
