import React, { useEffect } from "react"
import { connect } from "react-redux"
import SlideEditor from "../../../components/editor/slideEditor/SlideEditor"
import SlidesEditor from "../../../components/editor/slidesEditor/SlidesEditor"
import SlidePropertiesEditor from "../../../components/editor/slidePropertiesEditor/SlidePropertiesEditor"
import { selectUserCollection } from "../../../redux/collections/collectionsSelectors"
import { editorCopyCollection } from "../../../redux/editor/editorActions"
import { selectEditorCollection } from "../../../redux/editor/editorSelectors"
import CollectionEditorCard from "../../../components/editor/collectionEditorCard/CollectionEditorCard"
import LoadingAnimationFullScreen from "../../../components/animation/loadingAnimation/LoadingAnimationFullScreen"
import CustomBackground from "../../../components/custom/customBackground/CustomBackground"
import { withRouter } from "react-router-dom"
import ROUTES from "../../../routes/routes"

import "./editorPage.scss"

const EditorPage = ({ editorCollection, collection, copyCollection, history }) => {
  useEffect(() => {
    collection ? copyCollection(collection) : history.push(ROUTES.LIBRARY.RECENT)
    // eslint-disable-next-line
  }, [])
  if (!editorCollection) return <LoadingAnimationFullScreen />

  return (
    <CustomBackground className="editor-page" bubbleBackground={false}>
      <SlidesEditor />
      <SlideEditor />
      <SlidePropertiesEditor />
      <CollectionEditorCard />
    </CustomBackground>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectUserCollection(ownProps.match.params.collectionId)(state),
  editorCollection: selectEditorCollection(state),
})

const mapDispatchToProps = dispatch => ({
  copyCollection: properties => dispatch(editorCopyCollection(properties)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorPage))
