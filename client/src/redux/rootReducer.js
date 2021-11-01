import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import collectionsReducer from "./collections/collectionsReducer"
import editorReducer from "./editor/editorReducer"
import eventHostReducer from "./eventHost/eventHostReducer"
import eventClientReducer from "./eventClient/eventClientReducer"

export default combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  editor: editorReducer,
  eventHost: eventHostReducer,
  eventClient: eventClientReducer,
})
