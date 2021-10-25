import React from "react"
import EditPropertiesSelectBoxComponent from "../editPropertiesSelectBox/EditPropertiesSelectBoxComponent"
import DuplicateQuestionButtonComponent from "../duplicateQuestionButton/DublicateQuestionButtonComponent"
import RemoveQuestionButtonComponent from "../removeQuestionButton/RemoveQuestionButtonComponent"
import "./editSlidePropertiesComponent.scss"
import CollectionSettingCartToggleButtonComponent from "../collectionSettingCartToggleButton/CollectionSettingCartToggleButtonComponent"

const EditSlidePropertiesComponent = () => {
  return (
    <div className="edit-slide-properties-component">
      <div className="edit-slide-properties-component-container">
        <div className="properties">
          <EditPropertiesSelectBoxComponent title="Time" options={timeValues} name="time" />
          <EditPropertiesSelectBoxComponent title="Points" options={pointsValues} name="points" />
        </div>
        <div className="buttons">
          <DuplicateQuestionButtonComponent className="button-100" />
          <RemoveQuestionButtonComponent className="button-100" />
          <CollectionSettingCartToggleButtonComponent className="button-100 span-full" />
        </div>
      </div>
    </div>
  )
}

export default EditSlidePropertiesComponent

const timeValues = [
  { value: 5, label: "5 seconds" },
  { value: 10, label: "10 seconds" },
  { value: 20, label: "20 seconds" },
  { value: 30, label: "30 seconds" },
  { value: 60, label: "1 minute" },
  { value: 120, label: "2 minutes" },
  { value: 240, label: "5 minutes" },
]

const pointsValues = [
  { value: 1, label: "Standard" },
  { value: 2, label: "Double points" },
  { value: 0, label: "No points" },
]
