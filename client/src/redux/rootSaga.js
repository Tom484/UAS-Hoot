import { all, call } from "redux-saga/effects"

import userSagas from "./user/userSagas"
import collectionsSagas from "./collections/collectionsSagas"
import eventPropertiesSagas from "./eventProperties/eventPropertiesSagas"

export default function* rootSaga() {
  yield all([call(userSagas), call(collectionsSagas), call(eventPropertiesSagas)])
}
