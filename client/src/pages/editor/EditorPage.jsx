import React from "react"
import { connect } from "react-redux"
import { selectEditorCollection } from "../../redux/editor/editorSelectors"
import SlideEditor from "../../components/editor/slideEditor/SlideEditor"
import SlidesEditor from "../../components/editor/slidesEditor/SlidesEditor"
import SlidePropertiesEditor from "../../components/editor/slidePropertiesEditor/SlidePropertiesEditor"
import CollectionEditorCard from "../../components/editor/collectionEditorCard/CollectionEditorCard"

import "./editorPage.scss"

const EditorPage = () => {
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

const mapStateToProps = state => ({
  collection: selectEditorCollection(state),
})

export default connect(mapStateToProps)(EditorPage)
