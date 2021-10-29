import { addSlideQuiz, duplicateSlide } from "./functions/editSlide"

const deleteReference = object => JSON.parse(JSON.stringify(object))

export const editorEditCollection = (previousCollection, { properties }) => {
  let newCollection = deleteReference(previousCollection)

  newCollection = {
    ...newCollection,
    ...properties,
  }

  return newCollection
}

export const editorEditSlide = (previousCollection, { slideId, properties }) => {
  let newCollection = deleteReference(previousCollection)

  slideId = slideId || newCollection.currentSlideId

  newCollection.slides[slideId] = {
    ...newCollection.slides[slideId],
    ...properties,
  }

  return newCollection
}

export const editorAddSlideQuiz = previousCollection => {
  let newCollection = deleteReference(previousCollection)

  addSlideQuiz(newCollection)

  return newCollection
}

export const editorDuplicateSlide = (previousCollection, { slideId }) => {
  let newCollection = deleteReference(previousCollection)

  slideId = slideId || newCollection.currentSlideId
  const currentSlideIndex = newCollection.slidesOrder.indexOf(slideId)
  duplicateSlide(newCollection, slideId, currentSlideIndex)

  return newCollection
}

export const editorDeleteSlide = (previousCollection, { slideId }) => {
  let newCollection = deleteReference(previousCollection)

  if (newCollection.slidesOrder.length === 1) {
    console.log("There have to be minimal one slide!")
    return newCollection
  }

  slideId = slideId || newCollection.currentSlideId

  delete newCollection.slides[slideId]
  const index = newCollection.slidesOrder.indexOf(slideId)

  if (index === 0) newCollection.currentSlideId = newCollection.slidesOrder[index + 1]
  else newCollection.currentSlideId = newCollection.slidesOrder[index - 1]

  newCollection.slidesOrder.splice(index, 1)

  return newCollection
}

export const editorEditOption = (previousCollection, { slideId, optionId, properties }) => {
  let newCollection = deleteReference(previousCollection)

  slideId = slideId || newCollection.currentSlideId

  newCollection.slides[slideId].options[optionId] = {
    ...newCollection.slides[slideId].options[optionId],
    ...properties,
  }

  return newCollection
}
