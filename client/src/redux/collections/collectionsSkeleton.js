import uuid from "react-uuid"

export const collectionSkeleton = (name, creatorName) => {
  const collectionId = uuid()
  const questionId = uuid()
  const answer1Id = uuid()
  const answer2Id = uuid()
  const answer3Id = uuid()
  const answer4Id = uuid()

  return {
    [collectionId]: {
      id: collectionId,
      name: name || "Project",
      createdAt: new Date().getTime(),
      lastChangedAt: new Date().getTime(),
      creatorName: creatorName || "anonymous",
      questions: {
        [questionId]: {
          id: questionId,
          question: "Enter question",
          time: 20,
          answers: {
            [answer1Id]: {
              id: answer1Id,
              answer: "Answer 1",
              correct: false,
            },
            [answer2Id]: {
              id: answer2Id,
              answer: "Answer 2",
              correct: false,
            },
            [answer3Id]: {
              id: answer3Id,
              answer: "Answer 3",
              correct: false,
            },
            [answer4Id]: {
              id: answer4Id,
              answer: "Answer 4",
              correct: false,
            },
          },
        },
      },
    },
  }
}
