import { deleteReference, convertArrayToObject } from "../../functions/redux/reduxFunctions"

export const updatePlayers = (previousEvent, players) => {
  if (!previousEvent) return previousEvent
  const newEvent = deleteReference(previousEvent)

  newEvent.players = convertArrayToObject(players, "id")

  return newEvent
}
