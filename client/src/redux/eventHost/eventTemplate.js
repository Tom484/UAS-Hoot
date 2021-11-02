const eventTemplate = {
  collection, // Whole collections
  players: [
    {
      id: "4565",
      displayName: "Tom",
      score: 5000,
      answers: [true, false, false, true],
    },
  ], // Players with data
  answers: [
    {
      playerId: "45646",
      answerId: "45456465",
      submitAt: 45645645625,
    },
  ],
  currentSlide: {
    id: "lobby",
  },
  gameEnterCode,
  host: { id: currentUser.id, displayName: currentUser.displayName },
  isOpen: true,
}

const eventTemplateHost = {
  collection, // Whole collection
  gameEnterCode,
  players: [
    {
      id: "4565",
      displayName: "Tom",
      score: 5000,
      answers: [{ submitAt, answer }],
      joinAt: new Date().getTime(),
    },
  ],
}

const eventTemplateClient = {}
