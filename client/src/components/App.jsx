import React, { useEffect, useState } from "react"

import { Route, Switch, Redirect } from "react-router-dom"

// Import pages
import LandingPage from "../pages/landing/LandingPage"
import InvitePage from "../pages/invite/InvitePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import SingIn from "../pages/signIn/SignInPage"
import HeaderComponent from "./header/HeaderComponent"
import { auth } from "../firebase/firebaseUtils"

// Import components

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <HeaderComponent currentUser={currentUser} />
      <Switch>
        <Route path="/sign-in" component={SingIn} />
        <Route path="/invite" component={InvitePage} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  )
}

export default App
