import React from "react"
import UpdateAccountPassword from "../../../components/auth/updateAccount/UpdateAccountPassword"
import UpdateAccountInformation from "../../../components/auth/updateAccount/UpdateAccountInformation"
import ChangeThemeSetting from "../../../components/auth/changeThemeSetting/ChangeThemeSetting"
import CustomBackground from "../../../components/custom/customBackground/CustomBackground"
import NavbarContainer from "../../../components/navbar/navbarContainer/NavbarContainer"

import "./accountPage.scss"

const AccountPage = () => {
  return (
    <NavbarContainer>
      <CustomBackground className="account-page-container">
        <UpdateAccountInformation />
        <UpdateAccountPassword />
        <ChangeThemeSetting />
      </CustomBackground>
    </NavbarContainer>
  )
}

export default AccountPage
