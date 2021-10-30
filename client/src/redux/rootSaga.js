import { all, call } from "redux-saga/effects"

import { userSagas } from "./user/userSagas"
import { collectionsSagas } from "./collections/collectionsSagas"

export default function* rootSaga() {
  yield all([call(userSagas), call(collectionsSagas)])
}
