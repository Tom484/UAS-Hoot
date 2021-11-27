import React, { useEffect } from "react"
import { connect } from "react-redux"
import { ICONMoonOutline, ICONSunOutline } from "../../../icons/Icons"
import { toggleTheme } from "../../../redux/localSetting/localSettingActions"
import { selectLocalSettingTheme } from "../../../redux/localSetting/localSettingSelectors"

const DarkThemeToggle = ({ className, toggleTheme, theme }) => {
  const changeTheme = () => {
    toggleTheme()
  }

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark-theme")
    } else {
      document.body.classList.add("dark-theme")
    }
  }, [theme])

  return (
    <div className={className} onClick={changeTheme}>
      {theme === "light" ? (
        <ICONSunOutline className="theme-icon" />
      ) : (
        <ICONMoonOutline className="theme-icon" />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  theme: selectLocalSettingTheme(state),
})

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DarkThemeToggle)
