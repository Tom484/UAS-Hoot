import React from "react"
import { ICONMoonOutline, ICONSunOutline } from "../../../icons/Icons"

import "./darkThemeToggle.scss"

const DarkThemeToggle = () => {
  return (
    <div>
      {false ? (
        <ICONMoonOutline className="svg-icon-default-size svg-icon-default-color" />
      ) : (
        <ICONSunOutline className="svg-icon-default-size svg-icon-default-color" />
      )}
    </div>
  )
}

export default DarkThemeToggle
