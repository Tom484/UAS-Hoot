import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import collectionsReducer from "./collections/collectionsReducer"
import editorReducer from "./editor/editorReducer"
import eventClientReducer from "./eventClient/eventClientReducer"
import eventHostPropertiesReducer from "./eventHostProperties/eventHostPropertiesReducer"
import eventHostPlayersReducer from "./eventHostPlayers/eventHostPlayersReducer"

export default combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  editor: editorReducer,
  eventClient: eventClientReducer,
  eventHostProperties: eventHostPropertiesReducer,
  eventHostPlayers: eventHostPlayersReducer,
})
