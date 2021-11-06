import { all, call } from "redux-saga/effects"

import userSagas from "./user/userSagas"
import collectionsSagas from "./collections/collectionsSagas"
import eventDataSagas from "./eventData/eventDataSagas"

export default function* rootSaga() {
  yield all([call(userSagas), call(collectionsSagas), call(eventDataSagas)])
}
