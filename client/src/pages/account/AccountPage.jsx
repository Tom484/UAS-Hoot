import React from "react"
import UpdateAccountPassword from "../../components/components/updateAccount/UpdateAccountPassword"
import UpdateAccountInformation from "../../components/components/updateAccount/UpdateAccountInformation"
import ChangeThemeSetting from "../../components/components/changeThemeSetting/ChangeThemeSetting"
import CustomBackground from "../../components/components/customBackground/CustomBackground"
import Navbar from "../../components/components/Navbar/Navbar"

import "./accountPage.scss"

const AccountPage = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Navbar />
      <CustomBackground className="account-page-container">
        <UpdateAccountInformation />
        <UpdateAccountPassword />
        <ChangeThemeSetting />
      </CustomBackground>
    </div>
  )
}

export default AccountPage
