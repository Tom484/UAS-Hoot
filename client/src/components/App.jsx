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
import EventCreatePage from "../pages/eventCreate/EventCreatePage"
import EventPage from "../pages/event/EventPage"
import { firestore } from "../firebase/firebaseUtils"
import { updatePlayers } from "../redux/eventPlayers/eventPlayersActions"
import { selectEventPropertiesConnect } from "../redux/eventProperties/eventPropertiesSelectors"

const App = ({
  checkUserSession,
  fetchCollectionsStart,
  currentUser,
  updatePlayers,
  eventPropertiesConnect,
}) => {
  useEffect(() => {
    checkUserSession()
    if (currentUser) {
      fetchCollectionsStart(currentUser)
    }
    // eslint-disable-next-line
  }, [currentUser])

  useEffect(() => {
    if (!currentUser) return
    if (!eventPropertiesConnect?.isOpen) return
    const unsubscribe = firestore
      .collection(`events`)
      .doc(eventPropertiesConnect.enterCode)
      .collection("players")
      .onSnapshot(snapshot => {
        const players = snapshot.docs.map(doc => doc.data())
        console.log(players)
        updatePlayers(players)
      })
    return () => unsubscribe()
    // eslint-disable-next-line
  }, [currentUser, eventPropertiesConnect])

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
          path="/create-event/:collectionId"
          component={EventCreatePage}
        />
        <PrivateRoute exact onlyLogged={true} redirect="/" path="/event" component={EventPage} />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/"
          path="/editor/:collectionId"
          component={EditorPage}
        />
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
  eventPropertiesConnect: selectEventPropertiesConnect(state),
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: currentUser => dispatch(fetchCollectionsStart(currentUser)),
  updatePlayers: players => dispatch(updatePlayers(players)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
