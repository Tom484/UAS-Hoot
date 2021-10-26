import uuid from "react-uuid"

export const collectionSkeleton = ({
  collectionId = uuid(),
  properties: { name = "Project", author = "Anonymous" },
}) => {
  const slideId = uuid()
  const option1Id = uuid()
  const option2Id = uuid()
  const option3Id = uuid()
  const option4Id = uuid()

  return {
    [collectionId]: {
      name: name,
      author: author,
      description: "",
      id: collectionId,
      createdAt: new Date().getTime(),
      changedAt: new Date().getTime(),
      slidesOrder: [slideId],
      currentSlideId: slideId,
      currentSlideIndex: 0,
      collectionSettingShow: true,
      language: { value: "english", label: "English" },
      lobbyMusic: { value: "cold", label: "Neffex - Cold" },

      slides: {
        [slideId]: {
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
        },
      },
    },
  }
}

// quiz trueFalse slide
