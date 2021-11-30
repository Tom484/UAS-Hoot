import React from "react"
import BubbleBackground from "../../components/components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/components/lineBackground/LineBackground"

import "./accountPage.scss"

const AccountPage = () => {
  return (
    <div className="account-page">
      <LineBackground />
      <BubbleBackground />
      <div className="account-page-container">
        <div className="profile-container">
          <div className="input-container">
            <div className="label">Display Name</div>
            <input className="input" />
          </div>
          <div className="input-container">
            <div className="label">Password</div>
            <input className="input" />
          </div>
          <div className="input-container">
            <div className="label">Confirm Passowrd</div>
            <input className="input" />
          </div>
          <div className="input-container">
            <div className="label">About</div>
            <input className="input" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
