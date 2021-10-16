import React, { useEffect } from "react"

import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { auth, createUserProfileDocument } from "../firebase/firebaseUtils"
import { setCurrentUser } from "../redux/user/userActions"
import PrivateRoute from "./privateRoute/PrivateRoute"

// Import pages
import HomePage from "../pages/home/HomePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import SingIn from "../pages/signInAndSignUp/SignInAndSignUpPage"
import HeaderComponent from "./header/HeaderComponent"

import CreatePage from "../pages/creator/create/CreatePage"
import DiscoverPage from "../pages/creator/discover/DiscoverPage"
import LibraryPage from "../pages/creator/library/LibraryPage"
import ReportsPage from "../pages/creator/reports/ReportsPage"

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
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/reports"
          component={ReportsPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/library"
          component={LibraryPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/discover"
          component={DiscoverPage}
        />
        <PrivateRoute exact onlyLogged={true} redirect="/" path="/create" component={CreatePage} />
        <PrivateRoute exact onlyLogged={false} redirect="/" path="/sign-in" component={SingIn} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
