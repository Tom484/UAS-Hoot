import React from "react"
import { withRouter } from "react-router-dom"
import { CustomTextLarge } from "../../custom/customText/CustomText"
import EditorButton from "../editorButton/EditorButton"
import SelectBoxEditorProperties from "../selectBoxEditorProperties/SelectBoxEditorProperties"

import "./slidePropertiesEditor.scss"

const SlidePropertiesEditor = ({ match }) => {
  return (
    <div className="slide-properties-editor">
      <div className="slide-properties-editor-container">
        <div>
          <CustomTextLarge
            style={{
              paddingBottom: "8px",
              color: "var(--color-text-2)",
            }}
            center
          >
            Properties
          </CustomTextLarge>
          <div className="properties">
            <SelectBoxEditorProperties label="Time" options={timeValues} name="time" />
            <SelectBoxEditorProperties label="Points" options={pointsValues} name="points" />
          </div>
        </div>
        <div className="buttons">
          <EditorButton type="DUPLICATE_SLIDE" className="w-100" />
          <EditorButton type="DELETE_SLIDE" className="w-100" />
          <EditorButton type="EXIT" className="w-100 " />
          <EditorButton
            type="SAVE_COLLECTION"
            className="w-100"
            collectionId={match.params.collectionId}
          />
          <EditorButton type="COLLECTION_EDITOR_CARD_TOGGLE_SHOW" className="w-100 span-full" />
        </div>
      </div>
    </div>
  )
}

export default withRouter(SlidePropertiesEditor)

const timeValues = [
  { value: 5, label: "5 seconds" },
  { value: 10, label: "10 seconds" },
  { value: 20, label: "20 seconds" },
  { value: 30, label: "30 seconds" },
  { value: 60, label: "1 minute" },
  { value: 120, label: "2 minutes" },
  { value: 300, label: "5 minutes" },
]

const pointsValues = [
  { value: 1, label: "Standard" },
  { value: 2, label: "Double points" },
  { value: 0, label: "No points" },
]
