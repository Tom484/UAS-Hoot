import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import collectionsReducer from "./collections/collectionsReducer"
import editorReducer from "./editor/editorReducer"
import eventPropertiesReducer from "./eventProperties/eventPropertiesReducer"
import eventPlayersReducer from "./eventPlayers/eventPlayersReducer"

export default combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  editor: editorReducer,
  eventProperties: eventPropertiesReducer,
  eventPlayers: eventPlayersReducer,
})
