import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebaseUtils"
import { connect } from "react-redux"

import "./headerComponent.scss"
import DarkThemeToggleComponent from "../darkThemeToggle/DarkThemeToggleComponent"

const Header = ({ currentUser }) => {
  return (
    <div className="header-component">
      <DarkThemeToggleComponent />
      <Link to="/">Home</Link>
      {currentUser && <Link to="/create">Create</Link>}
      {currentUser && <Link to="/discover">Discover</Link>}
      {currentUser && <Link to="/library">Library</Link>}
      {currentUser && <Link to="/reports">Reports</Link>}
      {currentUser ? (
        <div
          onClick={() => {
            auth.signOut()
          }}
        >
          Sign Out
        </div>
      ) : (
        <Link to="/sign-in">Sign In</Link>
      )}
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})

export default connect(mapStateToProps)(Header)
