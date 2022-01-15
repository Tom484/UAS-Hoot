import React, { useEffect } from "react"
import { connect } from "react-redux"
import { checkUserSession } from "../redux/user/userActions"
import { selectCompletedAuthInitialProcess, selectCurrentUser } from "../redux/user/userSelectors"
import { fetchCollectionsStart } from "../redux/collections/collectionsActions"
import AutoLoadingAnimation from "./components/loadingAnimation/AutoLoadingAnimation"
import DarkThemeListener from "./components/darkThemeListener/DarkThemeListener"
import Notifications from "./notifications/notifications/Notifications"
import { selectUserCollections } from "../redux/collections/collectionsSelectors"
import LoadingAnimation from "./components/loadingAnimation/LoadingAnimation"
import ContextMenu from "./components/contextMenu/ContextMenu"
import AppRoutes from "../routes/AppRoutes"

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
      <AppRoutes />
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
