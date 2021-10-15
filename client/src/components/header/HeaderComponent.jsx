import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header-component">
      <Link to="/">Home</Link>
      <Link to="/invite">Invite</Link>
      <Link to="/sign-in">Sign In</Link>
    </div>
  )
}

export default Header
