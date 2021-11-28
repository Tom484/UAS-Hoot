import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { selectEventDataConnect } from "../eventData/eventDataSelectors"
import { updatePlayersFailure, updatePlayersSuccess } from "./eventPlayersActions"
import EventPlayersActions from "./eventPlayersTypes"

export function* updatePlayersAsync({ payload }) {
  try {
    const event = yield select(selectEventDataConnect)
    const players = Object.entries(payload)
    console.log(event)

    const batch = firestore.batch()
    yield players.forEach(player => {
      const playerRef = firestore
        .collection("events")
        .doc(event.enterCode)
        .collection("players")
        .doc(player[0])
      batch.set(playerRef, player[1])
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
