import React, { useState } from "react"
import { auth, createUserProfileDocument, signInWithGoogle } from "../../../firebase/firebaseUtils"
import ButtonComponent from "../../components/button/ButtonComponent"
import FormInputComponent from "../../components/formInput/FormInputComponent"

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

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = userCredentials

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      await createUserProfileDocument(user)

      setUserCredentials({ email: "", password: "" })
    } catch (error) {
      console.error(error)
    }
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
