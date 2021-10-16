import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import themeReducer from "./theme/themeReducer"
import userCollectionsReducer from "./userCollections/userCollectionsReducer"

export default combineReducers({
  user: userReducer,
  theme: themeReducer,
  userCollections: userCollectionsReducer,
})
