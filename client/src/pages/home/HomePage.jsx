import React from "react"
import { ICONLogoOutline } from "../../icons/Icons"

import "./homePage.scss"

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-container">
        <div className="title-container">
          <div className="icon">
            <ICONLogoOutline className="app-icon" />
          </div>
          <h1 className="title">
            UAS <span className="bold">Hoot Creator</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage
