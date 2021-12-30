import React from "react"
import { connect } from "react-redux"
import { ICONMenuOutline } from "../../../icons/Icons"
import { toggleNavbarActive } from "../../../redux/localSetting/localSettingActions"

const NavbarActiveToggle = ({ toggleNavbarActive, className }) => {
  return <ICONMenuOutline className={className} onClick={toggleNavbarActive} />
}

const mapDispatchToProps = dispatch => ({
  toggleNavbarActive: () => dispatch(toggleNavbarActive()),
})

export default connect(null, mapDispatchToProps)(NavbarActiveToggle)
