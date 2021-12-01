import React from "react"
import { ICONSettingOutline, ICONUserOutline } from "../../../icons/Icons"
import { changeThemeSetting } from "../../../redux/localSetting/localSettingActions"
import { connect } from "react-redux"

import "./changeThemeSetting.scss"
import { selectLocalSettingThemeSetting } from "../../../redux/localSetting/localSettingSelectors"

const ChangeThemeSetting = ({ themeSetting, mapDispatchToProps }) => {
  console.log(themeSetting)
  return (
    <div className="change-theme-setting">
      <div className="change-theme-setting-container">
        <div className="theme-title">Change Theme</div>
        <div className="settings-container">
          <div className="setting-container active">
            <ICONUserOutline className="icon-theme" />
            <div className="label">Select</div>
          </div>
          <div className="setting-container">
            <ICONSettingOutline className="icon-theme" />
            <div className="label">System</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  themeSetting: selectLocalSettingThemeSetting(state),
})

const mapDispatchToProps = dispatch => ({
  changeThemeSetting: value => dispatch(changeThemeSetting(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeThemeSetting)
