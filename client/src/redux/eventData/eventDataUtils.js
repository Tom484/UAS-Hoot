import { deleteReference } from "../../functions/redux/reduxFunctions"

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
