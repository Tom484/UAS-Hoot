import { collectionSkeleton } from "./collectionsSkeleton"

export const createCollection = (previousCollections, { name, creatorName }) => {
  return { ...previousCollections, ...collectionSkeleton(name, creatorName) }
}
export const editCollection = (previousCollections, { collectionId, properties }) => {
  const newCollections = { ...previousCollections }

  newCollections[collectionId] = {
    ...newCollections[collectionId],
    ...properties,
  }

  return { ...JSON.parse(JSON.stringify(newCollections)) }
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

  return { ...JSON.parse(JSON.stringify(newCollections)) }
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

  return { ...JSON.parse(JSON.stringify(newCollections)) }
}
