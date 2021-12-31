import { firestore } from "../../firebase/firebaseUtils"

export const eventDataTemplate = (collection, enterCode, currentUser, timeDifference) => {
  return {
    collection: { ...collection },
    connect: {
      enterCode,
      isOpen: true,
    },
    event: {
      slideType: "",
      slideId: "",
      slideIndex: 0,
      numberOfSlides: collection.slidesOrder.length,
      closeVoteAt: 0,
      openVoteAt: 0,
      status: "LOBBY", //LOBBY GAME GAME_RESULTS OVERALL_RESULTS
    },
    host: {
      id: currentUser.id,
      displayName: currentUser.displayName,
      timeDifference,
    },
  }
}

export const createCollectionRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("data").doc("collection")
export const createConnectRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("data").doc("connect")
export const createEventRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("data").doc("event")
export const createHostRef = enterCode =>
  firestore.collection(`events`).doc(enterCode).collection("data").doc("host")
