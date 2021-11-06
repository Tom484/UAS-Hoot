import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import collectionsReducer from "./collections/collectionsReducer"
import editorReducer from "./editor/editorReducer"
import eventDataReducer from "./eventData/eventDataReducer"
import eventPlayersReducer from "./eventPlayers/eventPlayersReducer"

export default combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  editor: editorReducer,
  eventData: eventDataReducer,
  eventPlayers: eventPlayersReducer,
})
