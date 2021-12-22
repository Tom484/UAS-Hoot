import React from "react"
import { withRouter } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const NavbarRender = ({ location }) => {
  const path = location.pathname
  if (
    path.includes("editor") ||
    path.includes("event") ||
    path === "/sign-in" ||
    path === "/sign-up" ||
    path === "/" ||
    path === "" ||
    path === "/not-found"
  )
    return <></>

  return (
    <div style={{ paddingTop: "80px" }}>
      <Navbar />
    </div>
  )
}

export default withRouter(NavbarRender)
