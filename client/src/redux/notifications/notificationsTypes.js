export const NotificationActionTypes = {
  CREATE_NOTIFICATION: "CREATE_NOTIFICATION",
  DELETE_NOTIFICATION: "DELETE_NOTIFICATION",
}

export const NOTIFICATION_TYPES = {
  WARNING: "warning",
  INFORMATION: "information",
  SUCCESS: "success",
  ERROR: "error",
}

export const NOTIFICATIONS = {
  SIGN_IN_WITH_EMAIL_FAILURE: {
    title: "Incorrect password or email",
    message: "Please make sure you enter correct email and password.",
    type: NOTIFICATION_TYPES.ERROR,
  },
  SIGN_IN_WITH_GOOGLE_FAILURE: {
    title: "Sign in with google failure",
    message: "Please check your internet connection and try again.",
    type: NOTIFICATION_TYPES.ERROR,
  },
  ENTER_EMAIL: {
    title: "Enter your email address",
    message: "Please enter your email address.",
    type: NOTIFICATION_TYPES.ERROR,
  },
  ENTER_PASSWORD: {
    title: "Enter your password",
    message: "Please enter your password.",
    type: NOTIFICATION_TYPES.ERROR,
  },
  PASSWORD_NOT_MATCH: {
    title: "Password do not match",
    message: "Passwords must match. ",
    type: NOTIFICATION_TYPES.ERROR,
  },
  SIGN_UP_WITH_EMAIL_FAILURE: {
    title: "Sign up failure",
    message: "Something went wrong or this account is already signed up.",
    type: NOTIFICATION_TYPES.ERROR,
  },
  SIGN_OUT_FAILURE: {
    title: "Sign out failure",
    message: "Sign out failure, please try again later.",
    type: NOTIFICATION_TYPES.ERROR,
  },
  UPDATE_PROFILE_SUCCESS: {
    title: "Updated successfully",
    message: "Your account was updated successfully.",
    type: NOTIFICATION_TYPES.SUCCESS,
  },
  UPDATE_PROFILE_FAILURE: {
    title: "Update failure",
    message: "Something went wrong, your account is not updated.",
    type: NOTIFICATION_TYPES.ERROR,
  },
  UPDATE_PASSWORD_SUCCESS: {
    title: "Updated successfully",
    message: "Your password was updated successfully.",
    type: NOTIFICATION_TYPES.SUCCESS,
  },
  UPDATE_PASSWORD_FAILURE: {
    title: "Update failure",
    message: "Something went wrong, your password is not updated.",
    type: NOTIFICATION_TYPES.ERROR,
  },
  NICKNAME_LENGTH: {
    title: "Nickname length",
    message: "Nickname must be long 3 to 18 characters!",
    type: NOTIFICATION_TYPES.ERROR,
  },
  ABOUT_ME_LENGTH: {
    title: "About me length",
    message: "The maximum length of the about me is 500 characters!",
    type: NOTIFICATION_TYPES.ERROR,
  },
  RESET_PASSWORD_EMAIL_SUCCESS: {
    title: "Reset password email success",
    message: "Check your email box for further instructions!",
    type: NOTIFICATION_TYPES.SUCCESS,
  },
  RESET_PASSWORD_EMAIL_FAILURE: {
    title: "Reset password failure",
    message: "Something went wrong, this account with this email may not exist.",
    type: NOTIFICATION_TYPES.ERROR,
  },
}
