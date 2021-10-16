import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebaseUtils"
import { connect } from "react-redux"

import "./headerComponent.scss"

const Header = ({ currentUser }) => {
  return (
    <div className="header-component">
      <Link to="/">Home</Link>
      <Link to="/invite">Invite</Link>
      <Link to="/create-game">Games</Link>
      <Link to="/start-game">Start</Link>
      <Link to="/create-game">Create</Link>
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
