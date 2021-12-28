import React from "react"
import { connect } from "react-redux"
import { selectLocalSettingNavbarActive } from "../../../redux/localSetting/localSettingSelectors"
import Navbar from "../navbar/Navbar"

import "./navbarContainer.scss"

const NavbarContainer = ({ children, navbarActive }) => {
  console.log(navbarActive)
  return (
    <div className={`navbar-container-component ${navbarActive ? "active" : ""}`}>
      <Navbar />
      {children}
    </div>
  )
}

const mapStateToProps = state => ({
  navbarActive: selectLocalSettingNavbarActive(state),
})

export default connect(mapStateToProps)(NavbarContainer)
