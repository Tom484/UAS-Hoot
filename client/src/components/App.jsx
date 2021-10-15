import React, { useEffect } from "react"

import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"

// Import pages
import LandingPage from "../pages/landing/LandingPage"
import InvitePage from "../pages/invite/InvitePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import SingIn from "../pages/signIn/SignInPage"
import HeaderComponent from "./header/HeaderComponent"
import { auth, createUserProfileDocument } from "../firebase/firebaseUtils"
import { setCurrentUser } from "../redux/user/userActions"

// Import components

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line
  }, [])

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
