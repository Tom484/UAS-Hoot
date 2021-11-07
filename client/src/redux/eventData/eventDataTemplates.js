import { firestore } from "../../firebase/firebaseUtils"

export const eventDataTemplate = (collection, enterCode, currentUser) => {
  return {
    collection: { ...collection },
    connect: {
      enterCode,
      isOpen: true,
    },
    event: {
      currentSlide: { type: "lobby", id: "", index: "", openVoteAt: 100, closeVoteAt: 140 },
      slidesOrder: collection.slidesOrder,
      currentSlideData: {},
    },
    admin: {
      id: currentUser.id,
      displayName: currentUser.displayName,
    },
  }
}

export const createCollectionRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("data").doc("collection")
export const createConnectRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("data").doc("connect")
export const createEventRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("data").doc("event")
export const createAdminRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("data").doc("admin")
