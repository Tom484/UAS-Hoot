import { collectionSkeleton } from "./collectionsSkeleton"
import { questionSkeleton } from "./questionSkeleton"

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

export const addCollectionQuestion = (previousCollections, { collectionId }) => {
  const newCollections = { ...previousCollections }

  newCollections[collectionId] = questionSkeleton(newCollections[collectionId])
  return { ...JSON.parse(JSON.stringify(newCollections)) }
}

export const removeCollectionQuestion = (previousCollections, { collectionId, questionId }) => {
  const newCollections = { ...previousCollections }

  delete newCollections[collectionId].questions[questionId]
  const index = newCollections[collectionId].questionsOrder.indexOf(questionId)
  console.log(index)
  newCollections[collectionId].questionsOrder.splice(index, 1)

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
