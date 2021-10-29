import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import DarkThemeToggleComponent from "../darkThemeToggle/DarkThemeToggleComponent"
import { signOutStart } from "../../../redux/user/userActions"

import "./headerComponent.scss"

const Header = ({ currentUser, signOutStart }) => {
  return (
    <div className="header-component">
      <DarkThemeToggleComponent />
      <Link to="/">Home</Link>
      {currentUser && <Link to="/discover">Discover</Link>}
      {currentUser && <Link to="/library">Library</Link>}
      {currentUser && <Link to="/reports">Reports</Link>}
      {currentUser && <Link to="/account">Account</Link>}
      {currentUser ? (
        <div onClick={signOutStart}>Sign Out</div>
      ) : (
        <Link to="/sign-in">Sign In</Link>
      )}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
})

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
