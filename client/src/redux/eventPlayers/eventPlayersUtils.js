import { convertArrayToObject } from "../../functions/redux/reduxFunctions"

export const playersArrayToObject = players => {
  return convertArrayToObject(players, "id")
}
