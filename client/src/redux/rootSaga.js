import { all, call } from "redux-saga/effects"

import { userSagas } from "./user/userSagas"
import { collectionsSagas } from "./collections/collectionsSagas"
import { eventClientSagas } from "./eventClient/eventClientSagas"
import { eventHostPropertiesSagas } from "./eventHostProperties/eventHostPropertiesSagas"

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(collectionsSagas),
    call(eventClientSagas),
    call(eventHostPropertiesSagas),
  ])
}
