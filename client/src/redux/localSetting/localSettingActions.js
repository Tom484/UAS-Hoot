import LocalSettingActionTypes from "./localSettingTypes"

export const toggleTheme = data => ({
  type: LocalSettingActionTypes.TOGGLE_THEME,
  payload: data,
})

export const changeThemeSetting = data => ({
  type: LocalSettingActionTypes.CHANGE_THEME_SETTING,
  payload: data,
})

export const updateSystemTheme = data => ({
  type: LocalSettingActionTypes.UPDATE_SYSTEM_THEME,
  payload: data,
})

export const toggleNavbarActive = () => ({
  type: LocalSettingActionTypes.TOGGLE_NAVBAR_ACTIVE,
})
