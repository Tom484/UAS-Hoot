import LocalSettingActionTypes from "./localSettingTypes"

export const toggleTheme = data => ({
  type: LocalSettingActionTypes.TOGGLE_THEME,
  payload: data,
})
