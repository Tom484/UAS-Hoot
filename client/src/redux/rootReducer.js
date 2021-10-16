import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import themeReducer from "./theme/themeReducer"

export default combineReducers({
  user: userReducer,
  theme: themeReducer,
})
