import { deleteReference } from "../../functions/redux/reduxFunctions"

export const updatePropertiesConnect = (previousProperties, connect) => {
  const newProperties = deleteReference(previousProperties)
  newProperties.connect = { ...newProperties.connect, ...connect }
  return newProperties
}

export const updatePropertiesEvent = (previousProperties, connect) => {
  const newProperties = deleteReference(previousProperties)
  newProperties.event = { ...newProperties.event, ...connect }
  return newProperties
}
