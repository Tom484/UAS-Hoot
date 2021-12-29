import React, { useEffect } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { checkUserSession } from "../redux/user/userActions"
import { selectCompletedAuthInitialProcess, selectCurrentUser } from "../redux/user/userSelectors"
import { fetchCollectionsStart } from "../redux/collections/collectionsActions"
import AutoLoadingAnimation from "./components/loadingAnimation/AutoLoadingAnimation"
import DarkThemeListener from "./components/darkThemeListener/DarkThemeListener"
import Notifications from "./components/notifications/Notifications"
import AuthRoutes from "../routes/auth/AuthRoutes"
import LibraryRoutes from "../routes/library/LibraryRoutes"
import DiscoverRoutes from "../routes/discover/DiscoverRoutes"
import EditorRoutes from "../routes/editor/EditorRoutes"
import NotFoundRoutes, { NOT_FOUND_ROUTES } from "../routes/notFound/NotFoundRoutes"
import ReportRoutes from "../routes/reports/ReportsRoutes"
import HomeRoutes from "../routes/home/HomeRoutes"
import EventRoutes from "../routes/event/EventRoutes"
import { selectUserCollections } from "../redux/collections/collectionsSelectors"
import LoadingAnimation from "./components/loadingAnimation/LoadingAnimation"
import ContextMenu from "./components/contextMenu/ContextMenu"

const App = ({
  currentUser,
  checkUserSession,
  fetchCollectionsStart,
  collections,
  completedAuthInitialProcess,
}) => {
  useEffect(() => {
    if (!currentUser) checkUserSession()
    if (currentUser && !collections) fetchCollectionsStart(currentUser)
    // eslint-disable-next-line
  }, [currentUser])

  if (!completedAuthInitialProcess) return <LoadingAnimation />

  return (
    <div>
      <Notifications />
      <DarkThemeListener />
      <AutoLoadingAnimation />
      <ContextMenu />
      <Switch>
        <Route path="/auth" component={AuthRoutes} />
        <Route path="/library" component={LibraryRoutes} />
        <Route path="/reports" component={ReportRoutes} />
        <Route path="/discover" component={DiscoverRoutes} />
        <Route path="/editor" component={EditorRoutes} />
        <Route path="/event" component={EventRoutes} />
        <Route path="/not-found" component={NotFoundRoutes} />
        <Route exact path="/" component={HomeRoutes} />
        <Redirect to={NOT_FOUND_ROUTES.NOT_FOUND} />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  collections: selectUserCollections(state),
  currentUser: selectCurrentUser(state),
  completedAuthInitialProcess: selectCompletedAuthInitialProcess(state),
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: currentUser => dispatch(fetchCollectionsStart(currentUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
