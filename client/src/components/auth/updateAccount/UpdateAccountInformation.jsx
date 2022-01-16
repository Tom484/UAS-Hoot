import React, { useState } from "react"
import { connect } from "react-redux"
import { createNotification } from "../../../redux/notifications/notificationsActions"
import { NOTIFICATIONS } from "../../../redux/notifications/notificationsTypes"
import { updateProfileStart } from "../../../redux/user/userActions"
import { selectCurrentUser } from "../../../redux/user/userSelectors"
import CustomButton from "../../custom/customButton/CustomButton"

import { CustomInputWithLabel } from "../../custom/customInput/CustomInput"
import CustomInputCard from "../../custom/customInputCard/CustomInputCard"

import { CustomTextLarge } from "../../custom/customText/CustomText"
import { CustomTextareaWithLabel } from "../../custom/customTextarea/CustomTextarea"

import "./updateAccount.scss"

const UpdateAccountInformation = ({ updateProfile, currentUser, createNotification }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: currentUser?.displayName || "",
    bio: currentUser?.bio || "",
  })

  const inputHandler = e => {
    setUserCredentials(prevPasswords => ({ ...prevPasswords, [e.target.name]: e.target.value }))
  }

  const updateProfileHandler = e => {
    const { displayName, bio } = userCredentials
    console.log(displayName)
    if (displayName.length < 3 || displayName.length > 18)
      return createNotification(NOTIFICATIONS.NICKNAME_LENGTH)
    if (bio.length > 500) return createNotification(NOTIFICATIONS.ABOUT_ME_LENGTH)

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
        styleTextarea={{ background: "var(--color-background-2)" }}
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
  createNotification: notification => dispatch(createNotification(notification)),
  updateProfile: profileInformation => dispatch(updateProfileStart(profileInformation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccountInformation)
