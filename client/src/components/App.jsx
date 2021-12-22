import React, { useEffect } from "react"

import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { checkUserSession } from "../redux/user/userActions"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import { selectCompletedAuthInitialProcess, selectCurrentUser } from "../redux/user/userSelectors"

import NotFoundPage from "../pages/notFound/NotFoundPage"
import DiscoverPage from "../pages/discover/DiscoverPage"
import LibraryPage from "../pages/library/LibraryPage"
import ReportsPage from "../pages/reports/ReportsPage"
import { fetchCollectionsStart } from "../redux/collections/collectionsActions"
import AccountPage from "../pages/account/AccountPage"
import EditorPage from "../pages/editor/EditorPage"
import EventCreatePage from "../pages/eventCreate/EventCreatePage"
import EventPage from "../pages/event/EventPage"
import LoadAnimation from "../components/components/loadAnimation/LoadAnimation"
import SignInPage from "../pages/signIn/SignInPage"
import SignUpPage from "../pages/signUp/SignUpPage"
import HomePage from "../pages/home/HomePage"
import LoadingAnimationDatabase from "./components/loadingAnimation/LoadingAnimationDatabase"
import DarkThemeListener from "./components/darkThemeListener/DarkThemeListener"

const App = ({
  currentUser,
  checkUserSession,
  fetchCollectionsStart,
  completedAuthInitialProcess,
}) => {
  useEffect(() => {
    checkUserSession()
    if (currentUser) fetchCollectionsStart(currentUser)
    // eslint-disable-next-line
  }, [currentUser])

  if (!completedAuthInitialProcess) return <LoadAnimation />

  return (
    <div>
      <LoadingAnimationDatabase />
      <DarkThemeListener />
      <Switch>
        <PrivateRoute exact onlyLogged={true} redirect="/" path="/event" component={EventPage} />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/editor/:collectionId"
          component={EditorPage}
        />
        <Route exact onlyLogged={false} redirect="/library/recent" path="/" component={HomePage} />
        <PrivateRoute
          exact
          onlyLogged={false}
          redirect="/library/recent"
          path="/sign-in"
          component={SignInPage}
        />
        <PrivateRoute
          exact
          onlyLogged={false}
          redirect="/library/recent"
          path="/sign-up"
          component={SignUpPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/create-event/:collectionId"
          component={EventCreatePage}
        />

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

        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  completedAuthInitialProcess: selectCompletedAuthInitialProcess(state),
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: currentUser => dispatch(fetchCollectionsStart(currentUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
