import React from "react"
import { connect } from "react-redux"
import { selectEditorCollection } from "../../redux/editor/editorSelectors"
import SlideEditor from "../../components/editor/slideEditor/SlideEditor"
import SlidesEditor from "../../components/editor/slidesEditor/SlidesEditor"
import SlidePropertiesEditor from "../../components/editor/slidePropertiesEditor/SlidePropertiesEditor"
// import CollectionEditor from "../../components/editor/collectionEditor/CollectionEditor"

import "./editorPage.scss"

const EditorPage = ({ collection }) => {
  // console.log(collection)
  return (
    <div className="editor-page">
      <div className="editor-page-container">
        <SlidesEditor />
        <SlideEditor />
        <SlidePropertiesEditor />
        {/* <CollectionEditor /> */}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  collection: selectEditorCollection(state),
})

export default connect(mapStateToProps)(EditorPage)
