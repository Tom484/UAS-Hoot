import ThemeActionTypes from "./themeTypes"

const INITIAL_STATE = {
  darkTheme: false,
}

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_DARK_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      }
    default:
      return state
  }
}

export default themeReducer
