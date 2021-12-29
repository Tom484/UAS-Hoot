import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { signOutStart } from "../../../redux/user/userActions"
import {
  ICONBookOutline,
  ICONClipboardOutline,
  ICONDirectOutline,
  ICONLogoOutline,
  ICONLogoutOutline,
  ICONMenuOutline,
  ICONUserOutline,
} from "../../../icons/Icons"
import { CustomTextMedium } from "../customText/CustomText"
import { HOME_ROUTES } from "../../../routes/home/HomeRoutes"
import { AUTH_ROUTES } from "../../../routes/auth/AuthRoutes"
import { REPORTS_ROUTERS } from "../../../routes/reports/ReportsRoutes"
import { DISCOVER_ROUTES } from "../../../routes/discover/DiscoverRoutes"
import { toggleNavbarActive } from "../../../redux/localSetting/localSettingActions"
import { selectLocalSettingNavbarActive } from "../../../redux/localSetting/localSettingSelectors"
import { LIBRARY_ROUTES } from "../../../routes/library/LibraryRoutes"

import "./navbar.scss"

const Navbar = ({ signOut, history, location, toggleNavbarActive, navbarActive }) => {
  const path = location.pathname

  return (
    <div className={`navbar-holder ${navbarActive ? "active" : ""}`}>
      <div className={`navbar ${navbarActive ? "active" : ""}`}>
        <div className="navbar-container">
          <ICONMenuOutline className="menu-icon" onClick={toggleNavbarActive} />
          <div className="links-container">
            <div className="link-container" onClick={() => history.push(HOME_ROUTES.HOME)}>
              <ICONLogoOutline className="link-icon" />
              <CustomTextMedium className="link-text">UAS Hoot</CustomTextMedium>
            </div>
            <div
              className={`link-container ${path.includes(LIBRARY_ROUTES.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(LIBRARY_ROUTES.RECENT)}
            >
              <ICONBookOutline className="link-icon" />
              <CustomTextMedium className="link-text">Library</CustomTextMedium>
            </div>
            <div
              className={`link-container ${path.includes(DISCOVER_ROUTES.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(DISCOVER_ROUTES.DEFAULT)}
            >
              <ICONClipboardOutline className="link-icon" />
              <CustomTextMedium className="link-text">Discover</CustomTextMedium>
            </div>
            <div
              className={`link-container ${path.includes(REPORTS_ROUTERS.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(REPORTS_ROUTERS.DEFAULT)}
            >
              <ICONDirectOutline className="link-icon" />
              <CustomTextMedium className="link-text">Reports</CustomTextMedium>
            </div>
            <div
              className={`link-container ${path.includes(AUTH_ROUTES.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(AUTH_ROUTES.ACCOUNT)}
            >
              <ICONUserOutline className="link-icon" />
              <CustomTextMedium className="link-text">Account</CustomTextMedium>
            </div>
            <div className="link-container" onClick={signOut}>
              <ICONLogoutOutline className="link-icon" />
              <CustomTextMedium className="link-text">Sign Out</CustomTextMedium>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  navbarActive: selectLocalSettingNavbarActive(state),
})
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart()),
  toggleNavbarActive: () => dispatch(toggleNavbarActive()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
