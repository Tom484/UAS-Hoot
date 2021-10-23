import { collectionSkeleton } from "./collectionsSkeleton"

export const createCollection = (previousCollections, { name, creatorName }) => {
  return { ...previousCollections, ...collectionSkeleton(name, creatorName) }
}

export const editCollectionQuestion = (
  previousCollections,
  { collectionId, questionId, properties }
) => {
  const newCollections = { ...previousCollections }

  newCollections[collectionId].questions[questionId] = {
    ...newCollections[collectionId].questions[questionId],
    ...properties,
  }
  const objectWithoutReference = JSON.parse(JSON.stringify(newCollections))

  return { ...objectWithoutReference }
}

export const editCollectionAnswer = (
  previousCollections,
  { collectionId, questionId, answerId, properties }
) => {
  const newCollections = { ...previousCollections }

  newCollections[collectionId].questions[questionId].answers[answerId] = {
    ...newCollections[collectionId].questions[questionId].answers[answerId],
    ...properties,
  }
  const objectWithoutReference = JSON.parse(JSON.stringify(newCollections))

  return { ...objectWithoutReference }
}
