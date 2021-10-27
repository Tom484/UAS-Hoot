import { duplicateSlideParameters } from "./duplicateSlideParameters"
import { collectionSkeleton } from "./collectionsSkeleton"
import { slideSkeleton } from "./slideSkeleton"

const deleteReference = object => JSON.parse(JSON.stringify(object))

// createCollection
export const createCollection = (previousCollections, properties) => {
  return deleteReference({ ...previousCollections, ...collectionSkeleton(properties) })
}

// editCollection
export const editCollection = (previousCollections, { collectionId, properties }) => {
  const newCollections = { ...previousCollections }

  newCollections[collectionId] = {
    ...newCollections[collectionId],
    ...properties,
  }

  return deleteReference(newCollections)
}

// removeCollection
export const deleteCollection = (previousCollections, { collectionId }) => {
  const newCollections = { ...previousCollections }
  delete newCollections[collectionId]

  return deleteReference(newCollections)
}

// editCollectionQuestion
export const editSlide = (previousCollections, { collectionId, slideId, properties }) => {
  const newCollections = { ...previousCollections }
  slideId = slideId || newCollections[collectionId].currentSlideId

  newCollections[collectionId].slides[slideId] = {
    ...newCollections[collectionId].slides[slideId],
    ...properties,
  }

  return deleteReference(newCollections)
}

// addCollectionQuestion
export const addSlideQuiz = (previousCollections, { collectionId }) => {
  const newCollections = { ...previousCollections }

  newCollections[collectionId] = slideSkeleton(newCollections[collectionId])
  return deleteReference(newCollections)
}

// duplicateCollectionQuestion
export const duplicateSlide = (previousCollections, { collectionId, slideId }) => {
  const newCollections = { ...previousCollections }
  slideId = slideId || newCollections[collectionId].currentSlideId
  const currentSlideIndex = previousCollections[collectionId].slidesOrder.indexOf(slideId)
  duplicateSlideParameters(previousCollections[collectionId], slideId, currentSlideIndex)

  return deleteReference(newCollections)
}

// removeCollectionQuestion
export const deleteSlide = (previousCollections, { collectionId, slideId }) => {
  if (previousCollections[collectionId].slidesOrder.length === 1) {
    console.log("There have to be minimal one slide!")
    return previousCollections
  }

  const newCollections = { ...previousCollections }
  slideId = slideId || newCollections[collectionId].currentSlideId

  delete newCollections[collectionId].slides[slideId]
  const index = newCollections[collectionId].slidesOrder.indexOf(slideId)

  if (index === 0) {
    newCollections[collectionId].currentSlideId =
      newCollections[collectionId].slidesOrder[index + 1]
  } else {
    newCollections[collectionId].currentSlideId =
      newCollections[collectionId].slidesOrder[index - 1]
  }
  newCollections[collectionId].slidesOrder.splice(index, 1)

  return deleteReference(newCollections)
}

// editCollectionAnswer
export const editOption = (
  previousCollections,
  { collectionId, slideId, optionId, properties }
) => {
  const newCollections = { ...previousCollections }
  slideId = slideId || newCollections[collectionId].currentSlideId

  newCollections[collectionId].slides[slideId].options[optionId] = {
    ...newCollections[collectionId].slides[slideId].options[optionId],
    ...properties,
  }

  return deleteReference(newCollections)
}
