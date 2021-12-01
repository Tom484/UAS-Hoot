import React, { useState } from "react"
import { connect } from "react-redux"
import TextareaAutosize from "react-textarea-autosize"
import { updateProfileStart } from "../../../redux/user/userActions"
import { selectCurrentUser } from "../../../redux/user/userSelectors"

import "./updateAccount.scss"

const UpdateAccountInformation = ({ updateProfile, currentUser }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: currentUser?.displayName || "",
    bio: currentUser?.bio || "",
  })

  const inputHandler = e => {
    setUserCredentials(prevPasswords => ({ ...prevPasswords, [e.target.name]: e.target.value }))
  }

  const updateProfileHandler = e => {
    const { displayName, bio } = userCredentials
    if (displayName < 4 || displayName > 18)
      return alert("Nickname must be long 4 to 18 characters!")
    if (bio > 500) return alert("The maximum length of the About Me is 500 characters!")
    updateProfile({ ...userCredentials })
  }

  return (
    <div className="profile-container">
      <div className="profile-title">Update Account</div>
      <div className="input-container">
        <div className="label">Nickname</div>
        <input
          name="displayName"
          type="text"
          className="input-information input"
          maxLength={18}
          onChange={inputHandler}
          value={userCredentials.displayName}
        />
      </div>
      <div className="input-container">
        <div className="label">Email</div>
        <input
          className="input-information input"
          input="email"
          value={currentUser.email}
          readOnly
        />
      </div>
      <div className="input-container">
        <div className="label">About me</div>
        <TextareaAutosize
          onChange={inputHandler}
          name="bio"
          type="text"
          className="input-information input"
          value={userCredentials.bio}
          maxLength={500}
        />
      </div>
      <button onClick={updateProfileHandler} className="btn-save btn">
        Save
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  updateProfile: profileInformation => dispatch(updateProfileStart(profileInformation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccountInformation)
