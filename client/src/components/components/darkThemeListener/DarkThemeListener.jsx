import React, { useEffect } from "react"
import { connect } from "react-redux"
import { updateSystemTheme } from "../../../redux/localSetting/localSettingActions"

const DarkThemeListener = ({ updateSystemTheme }) => {
  const mqListener = e => {
    e.matches ? updateSystemTheme("dark") : updateSystemTheme("light")
  }

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
    darkThemeMq.addListener(mqListener)
    darkThemeMq.matches ? updateSystemTheme("dark") : updateSystemTheme("light")
    return () => darkThemeMq.removeListener(mqListener)
    // eslint-disable-next-line
  }, [])

  return <></>
}

const mapDispatchToProps = dispatch => ({
  updateSystemTheme: theme => dispatch(updateSystemTheme(theme)),
})

export default connect(null, mapDispatchToProps)(DarkThemeListener)
