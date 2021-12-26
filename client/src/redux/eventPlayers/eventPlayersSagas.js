import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { selectEventDataConnect } from "../eventData/eventDataSelectors"
import { updatePlayersFailure, updatePlayersSuccess } from "./eventPlayersActions"
import EventPlayersActions from "./eventPlayersTypes"

export function* updatePlayersAsync({ payload }) {
  try {
    const { enterCode } = yield select(selectEventDataConnect)
    const players = Object.values(payload)

    const batch = firestore.batch()
    yield players.forEach(player => {
      const playerRef = firestore.doc(`events/${enterCode}/players/${player.id}`)
      batch.set(playerRef, player)
    })
    yield batch.commit()

    yield put(updatePlayersSuccess(payload))
  } catch (error) {
    yield put(updatePlayersFailure(error.message))
  }
}

export function* updatePlayersStart() {
  yield takeLatest(EventPlayersActions.UPDATE_PLAYERS_START, updatePlayersAsync)
}

export default function* eventPlayersSagas() {
  yield all([call(updatePlayersStart)])
}
