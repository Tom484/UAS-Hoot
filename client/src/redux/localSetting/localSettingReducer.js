import { toggleTheme } from "./localSettingUtils"
import LocalSettingActionTypes from "./localSettingTypes"

const initialState = {
  theme: "light",
  themeSetting: "select",
}

const localSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LocalSettingActionTypes.TOGGLE_THEME:
      return { ...state, theme: toggleTheme(state) }
    case LocalSettingActionTypes.CHANGE_THEME_SETTING:
      return { ...state, themeSetting: action.payload }
    default:
      return state
  }
}

export default localSettingReducer
