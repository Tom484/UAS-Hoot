import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import collectionsReducer from "./collections/collectionsReducer"
import editorReducer from "./editor/editorReducer"

export default combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  editor: editorReducer,
})
