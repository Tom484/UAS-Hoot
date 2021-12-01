import React, { useState } from "react"
import { changePasswordStart } from "../../../redux/user/userActions"
import { connect } from "react-redux"

import "./updateAccount.scss"

const UpdateAccountPassword = ({ changePassword }) => {
  const [userPassword, setUserPassword] = useState({ password: "", passwordConfirmation: "" })

  const inputHandler = e => {
    setUserPassword(prevPasswords => ({ ...prevPasswords, [e.target.name]: e.target.value }))
  }

  const changePasswordHandler = e => {
    const { password, passwordConfirmation } = userPassword
    if (password !== passwordConfirmation) return alert("Passwords do not match!")
    changePassword(userPassword.password)
  }

  return (
    <div className="profile-container">
      <div className="input-container">
        <div className="profile-title">Change Password</div>
        <div className="label">Password</div>
        <input
          name="password"
          type="password"
          value={userPassword.password}
          onChange={inputHandler}
          className="input-information input"
        />
      </div>
      <div className="input-container">
        <div className="label">Confirm Password</div>
        <input
          name="passwordConfirmation"
          type="password"
          onChange={inputHandler}
          value={userPassword.passwordConfirmation}
          className="input-information input"
        />
      </div>
      <button onClick={changePasswordHandler} className="btn-save btn">
        Update
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changePassword: password => dispatch(changePasswordStart({ password })),
})

export default connect(null, mapDispatchToProps)(UpdateAccountPassword)
