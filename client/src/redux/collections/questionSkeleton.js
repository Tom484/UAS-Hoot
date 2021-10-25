import uuid from "react-uuid"

export const questionSkeleton = object => {
  const questionId = uuid()
  const answer1Id = uuid()
  const answer2Id = uuid()
  const answer3Id = uuid()
  const answer4Id = uuid()
  object.questionsOrder.push(questionId)

  object.questions[questionId] = {
    id: questionId,
    question: "",
    time: { value: 30, label: "30 seconds" },
    points: { value: 1, label: "Standard" },
    answers: {
      [answer1Id]: {
        id: answer1Id,
        answer: "",
        correct: false,
      },
      [answer2Id]: {
        id: answer2Id,
        answer: "",
        correct: false,
      },
      [answer3Id]: {
        id: answer3Id,
        answer: "",
        correct: false,
      },
      [answer4Id]: {
        id: answer4Id,
        answer: "",
        correct: false,
      },
    },
  }

  return object
}
