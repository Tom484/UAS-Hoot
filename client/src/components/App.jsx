import React, { useEffect } from "react"
import { selectCompletedAuthInitialProcess, selectCurrentUser } from "../redux/user/userSelectors"
import LoadingAnimationFullScreen from "./animation/loadingAnimation/LoadingAnimationFullScreen"
import LoadingAnimationOnEvent from "./animation/loadingAnimation/LoadingAnimationOnEvent"
import { selectUserCollections } from "../redux/collections/collectionsSelectors"
import { fetchCollectionsStart } from "../redux/collections/collectionsActions"
import Notifications from "./notifications/notifications/Notifications"
import ContextMenu from "./components/contextMenu/ContextMenu"
import { checkUserSession } from "../redux/user/userActions"
import AppRoutes from "../routes/AppRoutes"
import { connect } from "react-redux"
import useUpdateDocumentTheme from "../functions/hooks/useChangeDocumentTheme"
import useThemeDetector from "../functions/hooks/useThemeDetector"
import CustomPopUpCard from "./custom/customPopUpCard/CustomPopUpCard"

const App = ({
  currentUser,
  checkUserSession,
  fetchCollectionsStart,
  collections,
  completedAuthInitialProcess,
}) => {
  useEffect(() => {
    if (!currentUser) checkUserSession()
    if (currentUser && !collections) fetchCollectionsStart()
    // eslint-disable-next-line
  }, [currentUser])

  useUpdateDocumentTheme()
  useThemeDetector()

  if (!completedAuthInitialProcess) return <LoadingAnimationFullScreen />

  return (
    <div>
      <Notifications />
      <LoadingAnimationOnEvent />
      <ContextMenu />
      <CustomPopUpCard />
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
