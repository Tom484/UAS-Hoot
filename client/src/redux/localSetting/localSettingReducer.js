import { changeSystemTheme, changeThemeSetting, toggleTheme } from "./localSettingUtils"
import LocalSettingActionTypes, { THEME_SETTING_VALUES } from "./localSettingTypes"

const initialState = {
  theme: "light",
  systemTheme: "light",
  themeSetting: THEME_SETTING_VALUES.SYSTEM_THEME,
}

const localSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LocalSettingActionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: toggleTheme(state),
        themeSetting: THEME_SETTING_VALUES.SELECT_THEME,
      }
    case LocalSettingActionTypes.CHANGE_THEME_SETTING:
      return { ...state, ...changeThemeSetting(state, action.payload) }
    case LocalSettingActionTypes.UPDATE_SYSTEM_THEME:
      return { ...state, ...changeSystemTheme(state, action.payload) }
    default:
      return state
  }
}

export default localSettingReducer