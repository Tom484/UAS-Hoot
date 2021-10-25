import uuid from "react-uuid"

export const collectionSkeleton = ({
  name = "Project",
  creatorName = "anonymous",
  collectionId = uuid(),
}) => {
  const questionId = uuid()
  const answer1Id = uuid()
  const answer2Id = uuid()
  const answer3Id = uuid()
  const answer4Id = uuid()

  return {
    [collectionId]: {
      id: collectionId,
      name: name,
      createdAt: new Date().getTime(),
      lastChangedAt: new Date().getTime(),
      creatorName: creatorName,
      questionsOrder: [questionId],
      language: { value: "english", label: "English" },
      lobbyMusic: { value: "cold", label: "Neffex - Cold" },
      description: "",
      collectionSettingCardVisible: true,
      questions: {
        [questionId]: {
          id: questionId,
          question: "Enter question",
          time: { value: 30, label: "30 seconds" },
          points: { value: 1, label: "Standard" },
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
