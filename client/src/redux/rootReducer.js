import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import collectionsReducer from "./collections/collectionsReducer"
import editorReducer from "./editor/editorReducer"
import eventDataReducer from "./eventData/eventDataReducer"
import eventPlayersReducer from "./eventPlayers/eventPlayersReducer"
import eventAnswersReducer from "./eventAnswers/eventAnswersReducer"
import eventResultsReducer from "./eventResults/eventResultsReducer"
import localSettingReducer from "./localSetting/localSettingReducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import notificationsReducer from "./notifications/notificationsReducer"

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["localSetting"],
  blacklist: [
    "user",
    "collections",
    "editor",
    "eventData",
    "eventPlayers",
    "eventAnswers",
    "eventResults",
    "notificationsReducer",
  ],
}

const rootReducer = combineReducers({
  localSetting: localSettingReducer,
  user: userReducer,
  collections: collectionsReducer,
  editor: editorReducer,
  eventData: eventDataReducer,
  eventPlayers: eventPlayersReducer,
  eventAnswers: eventAnswersReducer,
  eventResults: eventResultsReducer,
  notifications: notificationsReducer,
})

export default persistReducer(persistConfig, rootReducer)
