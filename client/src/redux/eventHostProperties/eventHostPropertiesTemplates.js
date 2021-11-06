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
    host: {
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
export const createHostRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("properties").doc("host")
