import { deleteReference } from "../../functions/redux/reduxFunctions"

export const deleteCollection = (previousCollections, { collectionId }) => {
  const newCollections = { ...previousCollections }
  delete newCollections[collectionId]
  return deleteReference(newCollections)
}
