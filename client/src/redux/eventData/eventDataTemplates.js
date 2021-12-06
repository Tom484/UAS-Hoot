import { firestore } from "../../firebase/firebaseUtils"

export const eventDataTemplate = (collection, enterCode, currentUser) => {
  console.log({
    collection: { ...collection },
    connect: {
      enterCode,
      isOpen: true,
    },
    event: {
      slideType: "lobby",
      slideId: "",
      closeVoteAt: 0,
      slideIndex: 0,
      openVoteAt: 0,
      status: "", //LOBBY GAME GAME_RESULTS OVERALL_RESULTS
      slidesId: [...collection.slidesOrder],
    },
    currentSlideData: {},
    slidesOrder: [...collection.slidesOrder],
    host: {
      id: currentUser.id,
      displayName: currentUser.displayName,
    },
  })

  // return {
  //   collection: { ...collection },
  //   connect: {
  //     enterCode,
  //     isOpen: true,
  //   },
  //   event: {
  //     currentSlide: { type: "lobby", id: "", index: "", openVoteAt: 100, closeVoteAt: 140 },
  //     slidesOrder: collection.slidesOrder,
  //     currentSlideData: {},
  //   },
  //   admin: {
  //     id: currentUser.id,
  //     displayName: currentUser.displayName,
  //   },
  // }

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
