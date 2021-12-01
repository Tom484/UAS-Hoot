import LocalSettingActionTypes from "./localSettingTypes"

export const toggleTheme = data => ({
  type: LocalSettingActionTypes.TOGGLE_THEME,
  payload: data,
})

export const changeThemeSetting = data => ({
  type: LocalSettingActionTypes.CHANGE_THEME_SETTING,
  payload: data,
})
