import React, { useEffect } from "react"

import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"

// import { addCollectionAndDocuments } from "../firebase/firebaseUtils"
import { checkUserSession } from "../redux/user/userActions"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import { selectCurrentUser } from "../redux/user/userSelectors"

// Import pages
import HomePage from "../pages/home/HomePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import SingIn from "../pages/signInAndSignUp/SignInAndSignUpPage"
import HeaderComponent from "../components/components/header/HeaderComponent"

// import EditPage from "../pages/edit/EditPage"
import DiscoverPage from "../pages/discover/DiscoverPage"
import LibraryPage from "../pages/library/LibraryPage"
import ReportsPage from "../pages/reports/ReportsPage"
import { fetchCollectionsStart } from "../redux/collections/collectionsActions"
import AccountPage from "../pages/account/AccountPage"
import EditorPage from "../pages/editor/EditorPage"
// import { collectionSkeleton } from "../redux/collections/collectionsSkeleton"
// import uuid from "react-uuid"

const App = ({ checkUserSession, fetchCollectionsStart, currentUser }) => {
  useEffect(() => {
    checkUserSession()
    if (currentUser) {
      fetchCollectionsStart()
    }
    // addCollectionAndDocuments(
    //   collectionSkeleton({
    //     collectionId: uuid(),
    //     properties: { name: "Project", author: "Tom", authorId: "afSp6Gd7Y9Sh2HsEAoH6bayZSjx2" },
    //   }),
    // )

    // eslint-disable-next-line
  }, [currentUser])

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
          path="/account"
          component={AccountPage}
        />
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
