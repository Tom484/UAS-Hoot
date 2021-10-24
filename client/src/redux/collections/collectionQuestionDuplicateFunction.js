import uuid from "react-uuid"

function insertAt(array, index, ...elementsArray) {
  array.splice(index, 0, ...elementsArray)
}

export const collectionQuestionDuplicateQuestion = (collection, questionId, currentQuestion) => {
  const newQuestionId = uuid()
  const answer1Id = uuid()
  const answer2Id = uuid()
  const answer3Id = uuid()
  const answer4Id = uuid()

  insertAt(collection.questionsOrder, currentQuestion, newQuestionId)
  const previousQuestion = collection.questions[questionId]
  const previousAnswersArray = Object.values(previousQuestion.answers)

  collection.questions[newQuestionId] = {
    id: newQuestionId,
    question: previousQuestion.question,
    time: previousQuestion.time,
    points: previousQuestion.points,
    answers: {
      [answer1Id]: {
        id: answer1Id,
        answer: previousAnswersArray[0].answer,
        correct: previousAnswersArray[0].correct,
      },
      [answer2Id]: {
        id: answer2Id,
        answer: previousAnswersArray[1].answer,
        correct: previousAnswersArray[1].correct,
      },
      [answer3Id]: {
        id: answer3Id,
        answer: previousAnswersArray[2].answer,
        correct: previousAnswersArray[2].correct,
      },
      [answer4Id]: {
        id: answer4Id,
        answer: previousAnswersArray[3].answer,
        correct: previousAnswersArray[3].correct,
      },
    },
  }
}
