import React from "react"
import { Link } from "react-router-dom"

import "./homePage.scss"

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-container">
        <h1 className="title">UAS Hoot</h1>
        <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  )
}

export default HomePage
