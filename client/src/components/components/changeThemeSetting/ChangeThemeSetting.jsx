import React from "react"
import { ICONSettingOutline, ICONUserOutline } from "../../../icons/Icons"
import { changeThemeSetting } from "../../../redux/localSetting/localSettingActions"
import { connect } from "react-redux"

import "./changeThemeSetting.scss"
import {
  selectLocalSettingSystemTheme,
  selectLocalSettingThemeSetting,
} from "../../../redux/localSetting/localSettingSelectors"
import { THEME_SETTING_VALUES } from "../../../redux/localSetting/localSettingTypes"

const ChangeThemeSetting = ({ changeThemeSetting, themeSetting, systemTheme }) => {
  return (
    <div className="change-theme-setting">
      <div className="change-theme-setting-container">
        <div className="theme-title">Change Theme</div>
        <div className="settings-container">
          <div
            className={`setting-container ${
              themeSetting === THEME_SETTING_VALUES.SELECT_THEME ? "active" : ""
            }`}
            onClick={() => changeThemeSetting(THEME_SETTING_VALUES.SELECT_THEME)}
          >
            <ICONUserOutline className="icon-theme" />
            <div className="label">Select</div>
          </div>
          <div
            className={`setting-container ${
              themeSetting === THEME_SETTING_VALUES.SYSTEM_THEME ? "active" : ""
            }`}
            onClick={() => changeThemeSetting(THEME_SETTING_VALUES.SYSTEM_THEME)}
          >
            <ICONSettingOutline className="icon-theme" />
            <div className="label">System ({systemTheme})</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  themeSetting: selectLocalSettingThemeSetting(state),
  systemTheme: selectLocalSettingSystemTheme(state),
})

const mapDispatchToProps = dispatch => ({
  changeThemeSetting: value => dispatch(changeThemeSetting(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeThemeSetting)
