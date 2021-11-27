import { toggleTheme } from "./localSettingUtils"
import LocalSettingActionTypes from "./localSettingTypes"

const initialState = {
  theme: "light",
}

const localSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LocalSettingActionTypes.TOGGLE_THEME:
      return { ...state, theme: toggleTheme(state) }
    default:
      return state
  }
}

export default localSettingReducer
