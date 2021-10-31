import React, { useEffect } from "react"

import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { checkUserSession } from "../redux/user/userActions"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import { selectCurrentUser } from "../redux/user/userSelectors"

// Import pages
import HomePage from "../pages/home/HomePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import SingIn from "../pages/signInAndSignUp/SignInAndSignUpPage"
import Header from "../components/components/header/Header"

import DiscoverPage from "../pages/discover/DiscoverPage"
import LibraryPage from "../pages/library/LibraryPage"
import ReportsPage from "../pages/reports/ReportsPage"
import { fetchCollectionsStart } from "../redux/collections/collectionsActions"
import AccountPage from "../pages/account/AccountPage"
import EditorPage from "../pages/editor/EditorPage"
import GameClientPage from "../pages/gameClient/GameClientPage"
import GameCreatePage from "../pages/gameCreate/GameCreatePage"
import GameHostPage from "../pages/gameHost/GameHostPage"

const App = ({ checkUserSession, fetchCollectionsStart, currentUser }) => {
  useEffect(() => {
    checkUserSession()
    if (currentUser) {
      fetchCollectionsStart(currentUser)
    }
    // eslint-disable-next-line
  }, [currentUser])

  return (
    <div>
      <Header />
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
          path="/library/:sortId"
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
          path="/account"
          component={AccountPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/create-game"
          component={GameCreatePage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/game-block"
          component={GameHostPage}
        />
        <Route exact path="/game" component={GameClientPage} />
        <Route exact path="/editor/:collectionId" component={EditorPage} />
        <PrivateRoute exact onlyLogged={false} redirect="/" path="/sign-in" component={SingIn} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: currentUser => dispatch(fetchCollectionsStart(currentUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
