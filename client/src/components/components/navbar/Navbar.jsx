import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
// import DarkThemeToggle from "../darkThemeToggle/DarkThemeToggle"
import { signOutStart } from "../../../redux/user/userActions"
import { ICONLogoOutline } from "../../../icons/Icons"

import "./navbar.scss"

const Header = ({ signOutStart, history, location }) => {
  const path = location.pathname

  return (
    <div className="navbar">
      {/* <div className="theme-toggle-container">
        <DarkThemeToggle />
      </div> */}
      <div className="navbar-container-desktop">
        <div className="side-logo" onClick={() => history.push("/")}>
          <ICONLogoOutline className="app-icon" />
          <div className="app-name">
            UAS <span className="fw-600">Hoot Creator</span>
          </div>
        </div>

        <div className="side-links">
          <div
            onClick={() => history.push("/library/recent")}
            className={`link ${path.includes("library") ? "active" : ""}`}
          >
            Library
          </div>
          <div
            onClick={() => history.push("/discover")}
            className={`link ${path === "/discover" ? "active" : ""}`}
          >
            Discover
          </div>
          <div
            onClick={() => history.push("/reports")}
            className={`link ${path === "/reports" ? "active" : ""}`}
          >
            Reports
          </div>
          <div
            onClick={() => history.push("/auth/account")}
            className={`link ${path === "/auth/account" ? "active" : ""}`}
          >
            Account
          </div>
          <div className="link" onClick={signOutStart}>
            Sign Out
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default withRouter(connect(null, mapDispatchToProps)(Header))
