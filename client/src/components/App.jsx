import React from "react"

import { Route, Switch, Redirect } from "react-router-dom"

// Import pages
import LandingPage from "../pages/landing/LandingPage"
import InvitePage from "../pages/invite/InvitePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import SingIn from "../pages/signIn/SignInPage"
import HeaderComponent from "./header/HeaderComponent"

// Import components

const App = () => {
  return (
    <div>
      <HeaderComponent />
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
