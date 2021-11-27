export const toggleTheme = state => {
  if (state.theme === "light") {
    return "dark"
  } else {
    return "light"
  }
}
