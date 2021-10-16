import React from "react"
import { connect } from "react-redux"
import { toggleDarkTheme } from "../../redux/theme/themeActions"

import "./darkThemeToggleComponent.scss"
import { ICONMoonOutline, ICONSunOutline } from "../../icons/Icons"

const DarkThemeToggleComponent = ({ toggleDarkTheme, darkTheme }) => {
  return (
    <div onClick={toggleDarkTheme}>
      {darkTheme ? (
        <ICONMoonOutline className="svg-icon-default-size svg-icon-default-color" />
      ) : (
        <ICONSunOutline className="svg-icon-default-size svg-icon-default-color" />
      )}
    </div>
  )
}

const mapStateToProps = ({ theme: { darkTheme } }) => ({
  darkTheme: darkTheme,
})

const mapDispatchToProps = dispatch => ({
  toggleDarkTheme: () => dispatch(toggleDarkTheme()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DarkThemeToggleComponent)
