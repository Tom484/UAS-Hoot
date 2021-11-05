import { createSelector } from "reselect"

const selectEvent = state => state.eventHostPlayers

export const selectEventPlayers = createSelector([selectEvent], event => event.players)

export const selectEventPlayersArray = createSelector(
  [selectEventPlayers],
  players => Object?.values(players) || []
)
