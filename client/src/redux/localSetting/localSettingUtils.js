import { THEME_SETTING_VALUES } from "./localSettingTypes"

export const toggleTheme = state => {
  if (state.theme === "light") {
    return "dark"
  } else {
    return "light"
  }
}

export const changeThemeSetting = (state, newThemeSetting) => {
  let newTheme = state.theme
  if (newThemeSetting === THEME_SETTING_VALUES.SYSTEM_THEME) {
    newTheme = state.systemTheme
  }
  return { theme: newTheme, themeSetting: newThemeSetting }
}

export const changeSystemTheme = (state, newTheme) => {
  if (state.themeSetting === THEME_SETTING_VALUES.SYSTEM_THEME) {
    return { ...state, theme: newTheme, systemTheme: newTheme }
  }
  return { ...state, systemTheme: newTheme }
}
