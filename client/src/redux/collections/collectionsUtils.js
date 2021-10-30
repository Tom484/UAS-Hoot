import { collectionSkeleton } from "./collectionsSkeleton"

const deleteReference = object => JSON.parse(JSON.stringify(object))

export const createCollection = (previousCollections, properties) => {
  return deleteReference({ ...previousCollections, ...collectionSkeleton(properties) })
}

export const editCollection = (previousCollections, { collectionId, properties }) => {
  const newCollections = { ...previousCollections }

  newCollections[collectionId] = {
    ...newCollections[collectionId],
    ...properties,
  }

  return deleteReference(newCollections)
}

export const deleteCollection = (previousCollections, { collectionId }) => {
  const newCollections = { ...previousCollections }
  delete newCollections[collectionId]

  return deleteReference(newCollections)
}
