import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import themeReducer from "./theme/themeReducer"
import collectionsReducer from "./collections/collectionsReducer"
import editorReducer from "./editor/editorReducer"

export default combineReducers({
  user: userReducer,
  theme: themeReducer,
  collections: collectionsReducer,
  editor: editorReducer,
})
