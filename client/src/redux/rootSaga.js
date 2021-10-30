import { all, call } from "redux-saga/effects"

import { userSagas } from "./user/userSaga"
import { fetchCollectionsStart } from "./collections/collectionsSagas"

export default function* rootSaga() {
  yield all([call(userSagas), call(fetchCollectionsStart)])
}
