import { collectionSkeleton } from "./collectionsSkeleton"

export const createCollection = (previousCollections, { name, creatorName }) => {
  return { ...previousCollections, ...collectionSkeleton(name, creatorName) }
}

export const editCollectionSelectQuestion = (
  previousCollections,
  { collectionId, questionId, properties }
) => {
  const newCollections = { ...previousCollections }
  newCollections[collectionId].questions[questionId].question = properties.question
  return { ...newCollections }
}
