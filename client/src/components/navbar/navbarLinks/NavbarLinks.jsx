import React from "react"
import {
  ICONBookBold,
  ICONBookOutline,
  ICONClipboardBold,
  ICONClipboardOutline,
  ICONDirectBold,
  ICONDirectOutline,
  ICONLogoBold,
  ICONLogoOutline,
  ICONLogoutOutline,
  ICONUserBold,
  ICONUserOutline,
} from "../../../icons/Icons"
import { CustomTextMedium } from "../../custom/customText/CustomText"
import { HOME_ROUTES } from "../../../routes/home/HomeRoutes"
import { AUTH_ROUTES } from "../../../routes/auth/AuthRoutes"
import { REPORTS_ROUTERS } from "../../../routes/reports/ReportsRoutes"
import { DISCOVER_ROUTES } from "../../../routes/discover/DiscoverRoutes"
import { LIBRARY_ROUTES } from "../../../routes/library/LibraryRoutes"
import { signOutStart } from "../../../redux/user/userActions"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import NavbarToggleThemeLink from "../navbarToggleThemeLink/NavbarToggleThemeLink"

import "./navbarLinks.scss"

const NavbarLinks = ({ signOut, history, location, toggleTheme }) => {
  const path = location.pathname

  return (
    <div className="navbar-links-container">
      <div
        className={`link-container ${path === HOME_ROUTES.INITIAL ? "active" : ""}`}
        onClick={() => history.push(HOME_ROUTES.HOME)}
      >
        {path === HOME_ROUTES.INITIAL ? (
          <ICONLogoBold className="link-icon" />
        ) : (
          <ICONLogoOutline className="link-icon" />
        )}
        <CustomTextMedium className="link-text">UAS Hoot</CustomTextMedium>
      </div>
      <div
        className={`link-container ${path.includes(LIBRARY_ROUTES.INITIAL) ? "active" : ""}`}
        onClick={() => history.push(LIBRARY_ROUTES.RECENT)}
      >
        {path.includes(LIBRARY_ROUTES.INITIAL) ? (
          <ICONBookBold className="link-icon" />
        ) : (
          <ICONBookOutline className="link-icon" />
        )}
        <CustomTextMedium className="link-text">Library</CustomTextMedium>
      </div>
      <div
        className={`link-container ${path.includes(DISCOVER_ROUTES.INITIAL) ? "active" : ""}`}
        onClick={() => history.push(DISCOVER_ROUTES.DEFAULT)}
      >
        {path.includes(DISCOVER_ROUTES.INITIAL) ? (
          <ICONClipboardBold className="link-icon" />
        ) : (
          <ICONClipboardOutline className="link-icon" />
        )}
        <CustomTextMedium className="link-text">Discover</CustomTextMedium>
      </div>
      <div
        className={`link-container ${path.includes(REPORTS_ROUTERS.INITIAL) ? "active" : ""}`}
        onClick={() => history.push(REPORTS_ROUTERS.DEFAULT)}
      >
        {path.includes(REPORTS_ROUTERS.INITIAL) ? (
          <ICONDirectBold className="link-icon" />
        ) : (
          <ICONDirectOutline className="link-icon" />
        )}
        <CustomTextMedium className="link-text">Reports</CustomTextMedium>
      </div>
      <div
        className={`link-container ${path.includes(AUTH_ROUTES.INITIAL) ? "active" : ""}`}
        onClick={() => history.push(AUTH_ROUTES.ACCOUNT)}
      >
        {path.includes(AUTH_ROUTES.INITIAL) ? (
          <ICONUserBold className="link-icon" />
        ) : (
          <ICONUserOutline className="link-icon" />
        )}
        <CustomTextMedium className="link-text">Account</CustomTextMedium>
      </div>
      <div className="link-container" onClick={signOut}>
        <ICONLogoutOutline className="link-icon" />
        <CustomTextMedium className="link-text">Sign Out</CustomTextMedium>
      </div>
      <NavbarToggleThemeLink />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart()),
})

export default withRouter(connect(null, mapDispatchToProps)(NavbarLinks))
