import { createSelector } from "reselect"

const selectEvent = state => state.eventPlayers

export const selectEventPlayers = createSelector([selectEvent], event => event.players)

export const selectEventPlayersArray = createSelector(
  [selectEventPlayers],
  players => Object?.values(players) || []
)

export const selectEventPlayersArraySorted = createSelector([selectEventPlayersArray], players =>
  players?.sort((a, b) => (b?.score || 0) - (a?.score || 0))
)

export const selectEventPlayersCount = createSelector(
  [selectEventPlayersArray],
  players => players?.length || 0
)
