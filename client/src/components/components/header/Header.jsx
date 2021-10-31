import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import DarkThemeToggle from "../darkThemeToggle/DarkThemeToggle"
import { signOutStart } from "../../../redux/user/userActions"

import "./header.scss"

const Header = ({ currentUser, signOutStart }) => {
  return (
    <div className="header-component">
      <DarkThemeToggle />
      <Link to="/">Home</Link>
      {currentUser && <Link to="/discover">Discover</Link>}
      {currentUser && <Link to="/library/recent">Library</Link>}
      {currentUser && <Link to="/reports">Reports</Link>}
      {currentUser && <Link to="/account">Account</Link>}
      {currentUser && <Link to="/create-game">Create Game</Link>}
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
