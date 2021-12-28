import React from "react"
import UpdateAccountPassword from "../../components/components/updateAccount/UpdateAccountPassword"
import UpdateAccountInformation from "../../components/components/updateAccount/UpdateAccountInformation"
import ChangeThemeSetting from "../../components/components/changeThemeSetting/ChangeThemeSetting"
import CustomBackground from "../../components/components/customBackground/CustomBackground"

import "./accountPage.scss"
import NavbarContainer from "../../components/components/navbarContainer/NavbarContainer"

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
