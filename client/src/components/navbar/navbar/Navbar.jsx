import React from "react"
import { connect } from "react-redux"
import { selectLocalSettingNavbarActive } from "../../../redux/localSetting/localSettingSelectors"
import NavbarActiveToggle from "../navbarActiveToggle/NavbarActiveToggle"
import NavbarLinks from "../navbarLinks/NavbarLinks"

import "./navbar.scss"

const Navbar = ({ navbarActive }) => {
  return (
    <div className={`navbar-holder ${navbarActive ? "active" : ""}`}>
      <div className={`navbar ${navbarActive ? "active" : ""}`}>
        <NavbarActiveToggle className="navbar-active-toggle" />
        <div className="navbar-container">
          <NavbarLinks />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  navbarActive: selectLocalSettingNavbarActive(state),
})

export default connect(mapStateToProps)(Navbar)
