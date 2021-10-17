import uuid from "react-uuid"

export const userCollectionSkeleton = (name, creatorName) => {
  const id = uuid()
  return {
    [id]: {
      id,
      name: name || "Project",
      createdAt: new Date().getTime(),
      lastChangedAt: new Date().getTime(),
      creatorName: creatorName || "anonymous",
      questions: [
        {
          time: 20,
          type: "select",
          question: "",
          answers: [
            {
              text: "",
              correct: false,
            },
            {
              text: "",
              correct: false,
            },
            {
              text: "",
              correct: false,
            },
            {
              text: "",
              correct: false,
            },
          ],
        },
      ],
    },
  }
}
