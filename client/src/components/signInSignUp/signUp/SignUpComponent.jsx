import React, { useState } from "react"
import { auth, createUserProfileDocument } from "../../../firebase/firebaseUtils"
import ButtonComponent from "../../components/button/ButtonComponent"
import FormInputComponent from "../../components/formInput/FormInputComponent"

import "./signUpComponent.scss"

const SignUpComponent = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentials(prevUserCredentials => ({ ...prevUserCredentials, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { displayName, email, password, passwordConfirm } = userCredentials

    if (password !== passwordConfirm) {
      alert("passwords do not much")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })

      setUserCredentials({ displayName: "", email: "", password: "", passwordConfirm: "" })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="sign-up-component">
      <div>Sign up with email and password</div>
      <form className="container" onSubmit={handleSubmit}>
        <FormInputComponent
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={userCredentials.displayName}
          label="Nickname"
          required
        />
        <FormInputComponent
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="Email"
          required
        />
        <FormInputComponent
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInputComponent
          name="passwordConfirm"
          type="password"
          value={userCredentials.passwordConfirm}
          handleChange={handleChange}
          label="Password Confirmation"
          required
        />
        <ButtonComponent type="submit">Sign Up</ButtonComponent>
      </form>
    </div>
  )
}

export default SignUpComponent
