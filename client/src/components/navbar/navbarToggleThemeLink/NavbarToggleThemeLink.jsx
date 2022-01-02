import React from "react"
import { connect } from "react-redux"
import { ICONMoonOutline, ICONSunOutline } from "../../../icons/Icons"
import { toggleTheme } from "../../../redux/localSetting/localSettingActions"
import { selectLocalSettingTheme } from "../../../redux/localSetting/localSettingSelectors"
import { CustomTextMedium } from "../../custom/customText/CustomText"

const NavbarToggleThemeLink = ({ theme, toggleTheme }) => {
  return (
    <div className="link-container" onClick={toggleTheme}>
      {theme === "light" ? (
        <ICONSunOutline className="link-icon" />
      ) : (
        <ICONMoonOutline className="link-icon" />
      )}
      <CustomTextMedium className="link-text">
        {theme === "light" ? "Light theme" : "Dark theme"}
      </CustomTextMedium>
    </div>
  )
}

const mapStateToProps = state => ({
  theme: selectLocalSettingTheme(state),
})

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarToggleThemeLink)
