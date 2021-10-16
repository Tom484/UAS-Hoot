import uuid from "react-uuid"

export const createCollection = previousCollections => {
  return {
    ...previousCollections,
    [uuid()]: {
      name: "",
      createdAt: "",
      createdBy: "",
      slides: [
        {
          time: 20,
          type: "select",
          question: "name",
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
