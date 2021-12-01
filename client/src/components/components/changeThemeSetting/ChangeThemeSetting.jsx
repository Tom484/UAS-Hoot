import React from "react"
import { ICONSettingOutline, ICONUserOutline } from "../../../icons/Icons"

import "./changeThemeSetting.scss"

const ChangeThemeSetting = () => {
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

export default ChangeThemeSetting
