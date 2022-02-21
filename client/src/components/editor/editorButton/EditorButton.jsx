import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { saveCollectionStart } from "../../../redux/collections/collectionsActions"
import {
  editorDeleteSlide,
  editorAddSlideQuiz,
  editorDuplicateSlide,
  editorEditCollection,
} from "../../../redux/editor/editorActions"
import { selectEditorCollection } from "../../../redux/editor/editorSelectors"
import EditorButtonTypes from "./editorButtonTypes"

import "./editorButton.scss"
import { showPopUpCard } from "../../../redux/localSetting/localSettingActions"
import { CUSTOM_POP_UP_CARD_ACTIONS } from "../../custom/customPopUpCard/CustomPopUpCard"

const EditorButton = ({
  collection,
  editCollection,
  addSlideQuiz,
  duplicateSlide,
  deleteSlide,
  saveCollection,
  type,
  slideId,
  collectionId,
  className,
  children,
  label,
  showPopUpCard,
}) => {
  const clickHandler = () => {
    switch (type) {
      case EditorButtonTypes.SAVE_COLLECTION.id:
        collectionSaveHandler()
        break
      case EditorButtonTypes.COLLECTION_EDITOR_CARD_TOGGLE_SHOW.id:
        collectionEditorCardToggleShowHandler()
        break
      case EditorButtonTypes.ADD_SLIDE_QUIZ.id:
        addSlideQuizHandler()
        break
      case EditorButtonTypes.ADD_SLIDE_TRUE_FALSE.id:
        addSlideTrueFalseHandler()
        break
      case EditorButtonTypes.DUPLICATE_SLIDE.id:
        duplicateSlideHandler()
        break
      case EditorButtonTypes.DELETE_SLIDE.id:
        deleteSlideHandler()
        break
      case EditorButtonTypes.EXIT.id:
        showPopUpCard({
          type: CUSTOM_POP_UP_CARD_ACTIONS.EXIT_EVENT_EDITOR,
          collectionId: collection.id,
        })
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }
  const collectionSaveHandler = () => {
    saveCollection({ collectionId })
  }

  const collectionEditorCardToggleShowHandler = () => {
    editCollection({
      properties: { collectionEditorCardShow: !collection.collectionEditorCardShow },
    })
  }

  const addSlideQuizHandler = () => {
    addSlideQuiz()
  }

  const addSlideTrueFalseHandler = () => {
    console.log("Add function!!")
  }

  const duplicateSlideHandler = () => {
    duplicateSlide({ slideId })
  }

  const deleteSlideHandler = () => {
    deleteSlide({ slideId })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>

  return (
    <button className={"btn editor-button " + className} onClick={clickHandler}>
      {label ? label : EditorButtonTypes[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapStateToProps = state => ({
  collection: selectEditorCollection(state),
})

const mapDispatchToProps = dispatch => ({
  editCollection: properties => dispatch(editorEditCollection(properties)),
  addSlideQuiz: () => dispatch(editorAddSlideQuiz()),
  duplicateSlide: id => dispatch(editorDuplicateSlide(id)),
  deleteSlide: id => dispatch(editorDeleteSlide(id)),
  saveCollection: id => dispatch(saveCollectionStart(id)),
  showPopUpCard: payload => dispatch(showPopUpCard(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditorButton))
