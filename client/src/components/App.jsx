import React, { useEffect } from "react"

import { Route, Switch, Redirect, withRouter } from "react-router-dom"
import { connect } from "react-redux"

import { checkUserSession } from "../redux/user/userActions"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import { selectCompletedAuthInitialProcess, selectCurrentUser } from "../redux/user/userSelectors"

// Import pages
import HomePage from "../pages/home/HomePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import SingIn from "../pages/signInAndSignUp/SignInAndSignUpPage"
import Navbar from "./components/Navbar/Navbar"

import DiscoverPage from "../pages/discover/DiscoverPage"
import LibraryPage from "../pages/library/LibraryPage"
import ReportsPage from "../pages/reports/ReportsPage"
import { fetchCollectionsStart } from "../redux/collections/collectionsActions"
import AccountPage from "../pages/account/AccountPage"
import EditorPage from "../pages/editor/EditorPage"
import EventCreatePage from "../pages/eventCreate/EventCreatePage"
import EventPage from "../pages/event/EventPage"
import { firestore } from "../firebase/firebaseUtils"
import { updatePlayersLocal } from "../redux/eventPlayers/eventPlayersActions"
import { selectEventDataConnect, selectEventDataEvent } from "../redux/eventData/eventDataSelectors"
import { updateAnswers } from "../redux/eventAnswers/eventAnswersActions"
import LoadAnimation from "../components/components/loadAnimation/LoadAnimation"

const App = ({
  checkUserSession,
  fetchCollectionsStart,
  currentUser,
  updatePlayers,
  eventDataConnect,
  updateAnswers,
  completedAuthInitialProcess,
  location,
}) => {
  const path = location.pathname

  useEffect(() => {
    checkUserSession()
    if (currentUser) {
      fetchCollectionsStart(currentUser)
    }
    // eslint-disable-next-line
  }, [currentUser])

  useEffect(() => {
    if (!currentUser) return
    if (!eventDataConnect?.isOpen) return
    const unsubscribe = firestore
      .collection(`events`)
      .doc(eventDataConnect.enterCode)
      .collection("players")
      .onSnapshot(snapshot => {
        const players = snapshot.docs.map(doc => doc.data())
        updatePlayers(players)
      })
    return () => unsubscribe()
    // eslint-disable-next-line
  }, [currentUser, eventDataConnect])

  useEffect(() => {
    if (!currentUser) return
    const unsubscribe = firestore
      .collection(`events`)
      .doc(eventDataConnect.enterCode)
      .collection("answers")
      .onSnapshot(snapshot => {
        const answers = snapshot.docs.map(doc => doc.data())
        updateAnswers(answers)
      })
    return () => unsubscribe()
    // eslint-disable-next-line
  }, [currentUser, eventDataConnect])

  if (!completedAuthInitialProcess) return <LoadAnimation />

  return (
    <div>
      {!(path.includes("editor") || path.includes("event")) && (
        <div className="div" style={{ paddingTop: "80px" }}></div>
      )}
      {!(path.includes("editor") || path.includes("event")) && <Navbar />}

      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/sign-in"
          path="/reports"
          component={ReportsPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/sign-in"
          path="/library/:sortId"
          component={LibraryPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/sign-in"
          path="/discover"
          component={DiscoverPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/sign-in"
          path="/account"
          component={AccountPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect="/sign-in"
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
  eventDataConnect: selectEventDataConnect(state),
  eventDataEvent: selectEventDataEvent(state),
  completedAuthInitialProcess: selectCompletedAuthInitialProcess(state),
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: currentUser => dispatch(fetchCollectionsStart(currentUser)),
  updatePlayers: players => dispatch(updatePlayersLocal(players)),
  updateAnswers: answers => dispatch(updateAnswers(answers)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
