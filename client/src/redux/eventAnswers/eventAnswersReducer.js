import { convertArrayToObject } from "../../functions/redux/reduxFunctions"
import EventAnswersActions from "./eventAnswersTypes"

const initialState = {
  answers: {},
}

const eventAnswersReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventAnswersActions.UPDATE_ANSWERS:
      return { ...state, answers: convertArrayToObject(action.payload, "id") }
    default:
      return state
  }
}

export default eventAnswersReducer
