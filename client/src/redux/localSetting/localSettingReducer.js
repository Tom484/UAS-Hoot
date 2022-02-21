import { changeSystemTheme, changeThemeSetting, toggleTheme } from "./localSettingUtils"
import LocalSettingActionTypes, { THEME_SETTING_VALUES } from "./localSettingTypes"

const initialState = {
  theme: "light",
  systemTheme: "light",
  themeSetting: THEME_SETTING_VALUES.SYSTEM_THEME,
  navbarActive: false,
  contextMenuItems: null,
  popUpCard: {
    show: false,
    action: null,
  },
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
    case LocalSettingActionTypes.TOGGLE_NAVBAR_ACTIVE:
      return { ...state, navbarActive: !state.navbarActive }
    case LocalSettingActionTypes.SET_CONTEXT_MENU_ITEMS:
      return { ...state, contextMenuItems: action.payload }
    case LocalSettingActionTypes.SHOW_POP_UP_CARD:
      return { ...state, popUpCard: { show: true, action: action.payload } }
    case LocalSettingActionTypes.HIDE_POP_UP_CARD:
      return { ...state, popUpCard: { show: false, action: null } }
    default:
      return state
  }
}

export default localSettingReducer
