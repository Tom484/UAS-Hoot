import React, { useEffect } from "react"

import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { auth, createUserProfileDocument } from "../firebase/firebaseUtils"
import { setCurrentUser } from "../redux/user/userActions"
import PrivateRoute from "./privateRoute/PrivateRoute"

// Import pages
import LandingPage from "../pages/landing/LandingPage"
import InvitePage from "../pages/invite/InvitePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import SingIn from "../pages/signInAndSignUp/signInAndSignUpPage"
import HeaderComponent from "./header/HeaderComponent"
import StartGamePage from "../pages/startGame/StartGamePage"
import CreateGamePage from "../pages/createGame/CreateGamePage"
import GamesMenuPage from "../pages/games/GamesMenuPage"

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
        <PrivateRoute exact onlyLogged={false} redirect="/" path="/sign-in" component={SingIn} />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/create-game"
          component={CreateGamePage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/start-game"
          component={StartGamePage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/games-menu"
          component={GamesMenuPage}
        />
        <Route exact path="/invite" component={InvitePage} />
        <Route exact path="/" component={LandingPage} />
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
