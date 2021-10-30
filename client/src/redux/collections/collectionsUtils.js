const deleteReference = object => JSON.parse(JSON.stringify(object))

export const deleteCollection = (previousCollections, { collectionId }) => {
  const newCollections = { ...previousCollections }
  delete newCollections[collectionId]
  return deleteReference(newCollections)
}
