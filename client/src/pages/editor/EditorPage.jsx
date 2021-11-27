import React, { useEffect } from "react"
import { connect } from "react-redux"
import SlideEditor from "../../components/editor/slideEditor/SlideEditor"
import SlidesEditor from "../../components/editor/slidesEditor/SlidesEditor"
import SlidePropertiesEditor from "../../components/editor/slidePropertiesEditor/SlidePropertiesEditor"
import { selectUserCollection } from "../../redux/collections/collectionsSelectors"
import { editorCopyCollection } from "../../redux/editor/editorActions"
import { selectEditorCollection } from "../../redux/editor/editorSelectors"
import CollectionEditorCard from "../../components/editor/collectionEditorCard/CollectionEditorCard"
import { withRouter } from "react-router-dom"

import "./editorPage.scss"

const EditorPage = ({ editorCollection, collection, copyCollection, history }) => {
  useEffect(() => {
    if (collection) {
      copyCollection(collection)
    } else {
      history.push("/library")
    }
    // eslint-disable-next-line
  }, [])

  if (!editorCollection) return <div>Loading</div>

  return (
    <div className="editor-page">
      <div className="editor-page-container">
        <SlidesEditor />
        <SlideEditor />
        <SlidePropertiesEditor />
        <CollectionEditorCard />
      </div>
    </div>
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
