import React, { useState } from "react"
import { connect } from "react-redux"
import { updateProfileStart } from "../../../redux/user/userActions"
import { selectCurrentUser } from "../../../redux/user/userSelectors"
import CustomButton from "../customButton/CustomButton"
import { CustomInputWithLabel } from "../customInput/CustomInput"
import CustomInputCard from "../customInputCard/CustomInputCard"

import { CustomTextLarge } from "../customText/CustomText"
import { CustomTextareaWithLabel } from "../customTextarea/CustomTextarea"

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
    <CustomInputCard>
      <CustomTextLarge style={{ marginBottom: "25px" }}>Update Account</CustomTextLarge>
      <CustomInputWithLabel
        label="Nickname"
        name="displayName"
        type="text"
        maxLength={18}
        onChange={inputHandler}
        value={userCredentials.displayName}
      />
      <CustomInputWithLabel label="Email" input="email" value={currentUser.email} readOnly />
      <CustomTextareaWithLabel
        label="About me"
        onChange={inputHandler}
        name="bio"
        type="text"
        value={userCredentials.bio}
        maxLength={500}
      />
      <CustomButton onClick={updateProfileHandler}>Save</CustomButton>
    </CustomInputCard>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  updateProfile: profileInformation => dispatch(updateProfileStart(profileInformation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccountInformation)
