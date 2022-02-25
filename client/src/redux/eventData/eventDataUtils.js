import { deleteReference } from "../../functions/redux/reduxFunctions"
import { getTimeDifference } from "../../functions/time/getTimeDifference"
import { eventDataTemplate } from "./eventDataTemplates"
import { STATUS_TYPES } from "./eventDataTypes"

export const updateDataConnect = (previousData, connect) => {
  const newData = deleteReference(previousData)
  newData.connect = { ...newData.connect, ...connect }
  return newData
}

export const updateDataEvent = (previousData, event) => {
  const newData = deleteReference(previousData)
  newData.event = { ...newData.event, ...event }
  return newData
}

export const createNewEvent = async (currentUser, collection) => {
  const enterCode = Math.round(Math.random() * 1000000).toString()

  const hostTimeDifference = await getTimeDifference()
  return eventDataTemplate(collection, enterCode, currentUser, hostTimeDifference)
}

export const updateToStartEvent = (collection, hostTimeDifference, preEvent) => {
  const id = collection.slidesOrder[0]
  const date = new Date().getTime()
  const slide = collection.slides[id]

  return {
    ...preEvent,
    slideId: id,
    slideIndex: 0,
    status: STATUS_TYPES.GAME,
    slideType: slide.type,
    openVoteAt: date + 6000 + hostTimeDifference,
    closeVoteAt: date + 6000 + slide.time.value * 1000 + hostTimeDifference,
    points: slide.points,
  }
}

export const updateToNextEvent = (collection, hostTimeDifference, preEvent) => {
  const id = collection?.slidesOrder[preEvent?.slideIndex + 1]
  const date = new Date().getTime()
  const slide = collection.slides[id]

  if (id) {
    return {
      ...preEvent,
      slideId: id,
      slideIndex: preEvent.slideIndex + 1,
      status: STATUS_TYPES.GAME,
      slideType: slide.type,
      openVoteAt: date + 6000 + hostTimeDifference,
      closeVoteAt: date + 6000 + slide.time.value * 1000 + hostTimeDifference,
      points: slide.points,
    }
  } else {
    return {
      ...preEvent,
      status: STATUS_TYPES.OVERALL_RESULTS,
    }
  }
}
