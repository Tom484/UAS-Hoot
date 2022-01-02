import React, { useEffect } from "react"
import { connect } from "react-redux"
import { updateSystemTheme } from "../../../redux/localSetting/localSettingActions"
import { selectLocalSettingTheme } from "../../../redux/localSetting/localSettingSelectors"

const DarkThemeListener = ({ updateSystemTheme, theme }) => {
  const mqListener = e => {
    e.matches ? updateSystemTheme("dark") : updateSystemTheme("light")
  }

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark-theme")
    } else {
      document.body.classList.add("dark-theme")
    }
  }, [theme])

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
    darkThemeMq.addListener(mqListener)
    darkThemeMq.matches ? updateSystemTheme("dark") : updateSystemTheme("light")
    return () => darkThemeMq.removeListener(mqListener)
    // eslint-disable-next-line
  }, [])

  return <></>
}

const mapStateToProps = state => ({
  theme: selectLocalSettingTheme(state),
})

const mapDispatchToProps = dispatch => ({
  updateSystemTheme: theme => dispatch(updateSystemTheme(theme)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DarkThemeListener)
