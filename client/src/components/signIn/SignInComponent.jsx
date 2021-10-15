import React, { useState } from "react"
import { signInWithGoogle } from "../../firebase/firebaseUtils"
import ButtonComponent from "../button/ButtonComponent"
import FormInputComponent from "../formInput/FormInputComponent"

import "./signInComponent.scss"

const SignInComponent = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentials(prevUserCredentials => ({ ...prevUserCredentials, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(userCredentials)
  }

  return (
    <div className="sign-in-component">
      <div>Sign in with email and password</div>
      <form className="container" onSubmit={handleSubmit}>
        <FormInputComponent
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="email"
          required
        />
        <FormInputComponent
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonComponent type="submit">Sign In</ButtonComponent>
        <ButtonComponent onClick={signInWithGoogle}>Sign In with Google</ButtonComponent>
      </form>
    </div>
  )
}

export default SignInComponent
