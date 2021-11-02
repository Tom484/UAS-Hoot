import uuid from "react-uuid"
import { deleteReference } from "../../../functions/redux/reduxFunctions"

export const addSlideQuiz = collection => {
  const newCollection = deleteReference(collection)

  const slideId = uuid()
  const option1Id = uuid()
  const option2Id = uuid()
  const option3Id = uuid()
  const option4Id = uuid()

  newCollection.slidesOrder.push(slideId)

  newCollection.slides[slideId] = {
    id: slideId,
    type: "quiz",
    question: "",
    time: { value: 30, label: "30 seconds" },
    points: { value: 1, label: "Standard" },
    options: {
      [option1Id]: {
        option: "",
        id: option1Id,
        correct: false,
      },
      [option2Id]: {
        option: "",
        id: option2Id,
        correct: false,
      },
      [option3Id]: {
        option: "",
        id: option3Id,
        correct: false,
      },
      [option4Id]: {
        option: "",
        id: option4Id,
        correct: false,
      },
    },
  }
  return newCollection
}

function insertAt(array, index, ...elementsArray) {
  array.splice(index, 0, ...elementsArray)
}

export const duplicateSlide = (collection, slideId, currentSlideIndex) => {
  const newCollection = deleteReference(collection)
  const newSlideId = uuid()
  const option1Id = uuid()
  const option2Id = uuid()
  const option3Id = uuid()
  const option4Id = uuid()

  insertAt(newCollection.slidesOrder, currentSlideIndex + 1, newSlideId)
  const copySlide = newCollection.slides[slideId]
  const copyOptionsArray = Object.values(copySlide.options)

  newCollection.slides[newSlideId] = {
    id: newSlideId,
    question: copySlide.question,
    time: copySlide.time,
    points: copySlide.points,
    type: copySlide.type,

    options: {
      [option1Id]: {
        id: option1Id,
        option: copyOptionsArray[0].option,
        correct: copyOptionsArray[0].correct,
      },
      [option2Id]: {
        id: option2Id,
        option: copyOptionsArray[1].option,
        correct: copyOptionsArray[1].correct,
      },
      [option3Id]: {
        id: option3Id,
        option: copyOptionsArray[2].option,
        correct: copyOptionsArray[2].correct,
      },
      [option4Id]: {
        id: option4Id,
        option: copyOptionsArray[3].option,
        correct: copyOptionsArray[3].correct,
      },
    },
  }

  return newCollection
}
