import { addSlideQuiz, duplicateSlide } from "./functions/editSlide"

import { deleteReference } from "../../functions/redux/reduxFunctions"

export const editorEditCollection = (previousCollection, { properties }) => {
  return deleteReference({ ...previousCollection, ...properties })
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
  return addSlideQuiz(previousCollection)
}
export const editorAddSlideTrueFalse = previousCollection => {
  return addSlideQuiz(previousCollection)
}
export const editorAddSlideInput = previousCollection => {
  return addSlideQuiz(previousCollection)
}

export const editorDuplicateSlide = (previousCollection, { slideId }) => {
  slideId = slideId || previousCollection.currentSlideId
  const currentSlideIndex = previousCollection.slidesOrder.indexOf(slideId)
  return duplicateSlide(previousCollection, slideId, currentSlideIndex)
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
