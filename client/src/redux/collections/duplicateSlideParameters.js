import uuid from "react-uuid"

function insertAt(array, index, ...elementsArray) {
  array.splice(index, 0, ...elementsArray)
}

export const duplicateSlideParameters = (collection, slideId, currentSlideIndex) => {
  const newSlideId = uuid()
  const option1Id = uuid()
  const option2Id = uuid()
  const option3Id = uuid()
  const option4Id = uuid()

  insertAt(collection.slidesOrder, currentSlideIndex + 1, newSlideId)
  const copySlide = collection.slides[slideId]
  const copyOptionsArray = Object.values(copySlide.options)

  collection.slides[newSlideId] = {
    id: newSlideId,
    question: copySlide.question,
    time: copySlide.time,
    points: copySlide.points,

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
}
