import React from "react"
import { connect } from "react-redux"
import {
  ICONCloudOutline,
  ICONDropOutline,
  ICONFlashOutline,
  ICONMoonOutline,
} from "../../../icons/Icons"
import { editorEditOption } from "../../../redux/editor/editorActions"
import { CustomTextarea } from "../../custom/customTextarea/CustomTextarea"

import "./slideEditorQuizOption.scss"

const SlideEditorQuizOption = ({ editOption, option, order }) => {
  const editOptionProperties = properties => {
    return editOption({
      optionId: option.id,
      properties,
    })
  }
  return (
    <div className="slide-editor-quiz-option">
      <div
        className={`icon-container ${option.correct ? "active" : ""}`}
        onClick={() => editOptionProperties({ correct: !option.correct })}
      >
        {order === 1 && <ICONFlashOutline className="select-icon" />}
        {order === 2 && <ICONCloudOutline className="select-icon" />}
        {order === 3 && <ICONDropOutline className="select-icon" />}
        {order === 4 && <ICONMoonOutline className="select-icon" />}
      </div>
      <CustomTextarea
        onChange={e => editOptionProperties({ option: e.target.value })}
        placeholder={`Add answer`}
        value={option.option}
        maxLength={75}
        className={!option?.option ? "warning" : ""}
        style={{
          padding: "20px",
          borderRadius: "0 12px 12px 0",
          borderWidth: "2px",
        }}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  editOption: idsAndProperties => dispatch(editorEditOption(idsAndProperties)),
})

export default connect(null, mapDispatchToProps)(SlideEditorQuizOption)
