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

import EditPage from "../pages/edit/EditPage"
import DiscoverPage from "../pages/discover/DiscoverPage"
import LibraryPage from "../pages/library/LibraryPage"
import ReportsPage from "../pages/reports/ReportsPage"
import { createCollection } from "../redux/collections/collectionsActions"
import AccountPage from "../pages/account/AccountPage"

const App = ({ setCurrentUser, createCollection }) => {
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
    createCollection({
      collectionId: "formula",
      properties: { name: "Formula 1", author: "Tomas Kurka44" },
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
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/edit/:collectionId"
          component={EditPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/account"
          component={AccountPage}
        />
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
  createCollection: properties => dispatch(createCollection(properties)),
})

export default connect(null, mapDispatchToProps)(App)
