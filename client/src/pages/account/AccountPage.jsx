import React from "react"
import BubbleBackground from "../../components/components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/components/lineBackground/LineBackground"
import UpdateAccountPassword from "../../components/components/updateAccount/UpdateAccountPassword"
import UpdateAccountInformation from "../../components/components/updateAccount/UpdateAccountInformation"

import "./accountPage.scss"
import ChangeThemeSetting from "../../components/components/changeThemeSetting/ChangeThemeSetting"

const AccountPage = () => {
  return (
    <div className="account-page">
      <LineBackground />
      <BubbleBackground />
      <div className="account-page-container">
        <UpdateAccountInformation />
        <UpdateAccountPassword />
        <ChangeThemeSetting />
      </div>
    </div>
  )
}

export default AccountPage
