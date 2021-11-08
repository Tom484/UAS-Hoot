import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import collectionsReducer from "./collections/collectionsReducer"
import editorReducer from "./editor/editorReducer"
import eventDataReducer from "./eventData/eventDataReducer"
import eventPlayersReducer from "./eventPlayers/eventPlayersReducer"
import eventAnswersReducer from "./eventAnswers/eventAnswersReducer"
import eventResultsReducer from "./eventResults/eventResultsReducer"

export default combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  editor: editorReducer,
  eventData: eventDataReducer,
  eventPlayers: eventPlayersReducer,
  eventAnswers: eventAnswersReducer,
  eventResults: eventResultsReducer,
})
