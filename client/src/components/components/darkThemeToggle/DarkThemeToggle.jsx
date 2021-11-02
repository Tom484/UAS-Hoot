import React from "react"
import { ICONMoonOutline, ICONSunOutline } from "../../../icons/Icons"

import "./darkThemeToggle.scss"

const DarkThemeToggle = () => {
  return (
    <div>
      {false ? (
        <ICONMoonOutline className="icon-df-size icon-df-color" />
      ) : (
        <ICONSunOutline className="icon-df-size icon-df-color" />
      )}
    </div>
  )
}

export default DarkThemeToggle
