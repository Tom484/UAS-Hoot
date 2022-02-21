import React from "react"
import {
  ICONBookBold,
  ICONBookOutline,
  ICONLogoBold,
  ICONLogoOutline,
  ICONLogoutOutline,
  ICONUserBold,
  ICONUserOutline,
} from "../../../icons/Icons"
import { CustomTextMedium } from "../../custom/customText/CustomText"
import { signOutStart } from "../../../redux/user/userActions"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import NavbarToggleThemeLink from "../navbarToggleThemeLink/NavbarToggleThemeLink"

import "./navbarLinks.scss"
import ROUTES from "../../../routes/routes"

const NavbarLinks = ({ signOut, history, location }) => {
  const path = location.pathname

  return (
    <div className="navbar-links-container">
      <div
        className={`link-container ${path === ROUTES.HOME.INITIAL ? "active" : ""}`}
        onClick={() => history.push(ROUTES.HOME.HOME)}
      >
        {path === ROUTES.HOME.INITIAL ? (
          <ICONLogoBold className="link-icon" />
        ) : (
          <ICONLogoOutline className="link-icon" />
        )}
        <CustomTextMedium className="link-text">UAS Hoot</CustomTextMedium>
      </div>
      <div
        className={`link-container ${path.includes(ROUTES.LIBRARY.INITIAL) ? "active" : ""}`}
        onClick={() => history.push(ROUTES.LIBRARY.RECENT)}
      >
        {path.includes(ROUTES.LIBRARY.INITIAL) ? (
          <ICONBookBold className="link-icon" />
        ) : (
          <ICONBookOutline className="link-icon" />
        )}
        <CustomTextMedium className="link-text">Library</CustomTextMedium>
      </div>
      {/* <div
        className={`link-container ${path.includes(ROUTES.DISCOVER.INITIAL) ? "active" : ""}`}
        onClick={() => history.push(ROUTES.DISCOVER.DEFAULT)}
      >
        {path.includes(ROUTES.DISCOVER.INITIAL) ? (
          <ICONClipboardBold className="link-icon" />
        ) : (
          <ICONClipboardOutline className="link-icon" />
        )}
        <CustomTextMedium className="link-text">Discover</CustomTextMedium>
      </div> */}
      {/* <div
        className={`link-container ${path.includes(ROUTES.REPORTS.INITIAL) ? "active" : ""}`}
        onClick={() => history.push(ROUTES.REPORTS.DEFAULT)}
      >
        {path.includes(ROUTES.REPORTS.INITIAL) ? (
          <ICONDirectBold className="link-icon" />
        ) : (
          <ICONDirectOutline className="link-icon" />
        )}
        <CustomTextMedium className="link-text">Reports</CustomTextMedium>
      </div> */}
      <div
        className={`link-container ${path.includes(ROUTES.AUTH.INITIAL) ? "active" : ""}`}
        onClick={() => history.push(ROUTES.AUTH.ACCOUNT)}
      >
        {path.includes(ROUTES.AUTH.INITIAL) ? (
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
