import React from "react"
import { connect } from "react-redux"
import TextareaAutosize from "react-textarea-autosize"
import {
  ICONCloudOutline,
  ICONDropOutline,
  ICONFlashOutline,
  ICONMoonOutline,
  ICONTickSquareBold,
} from "../../../icons/Icons"
import { editorEditOption } from "../../../redux/editor/editorActions"

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
      {order === 1 && <ICONFlashOutline className="icon-df-size icon-df-color" />}
      {order === 2 && <ICONCloudOutline className="icon-df-size icon-df-color" />}
      {order === 3 && <ICONDropOutline className="icon-df-size icon-df-color" />}
      {order === 4 && <ICONMoonOutline className="icon-df-size icon-df-color" />}

      <TextareaAutosize
        className="textarea-create textarea textarea-option"
        onChange={e => editOptionProperties({ option: e.target.value })}
        placeholder={`Add answer ${order}`}
        value={option.option}
        maxLength={75}
      />

      <ICONTickSquareBold
        className={`icon-df-size icon ${option.correct ? "checked" : ""}`}
        onClick={() => editOptionProperties({ correct: !option.correct })}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  editOption: idsAndProperties => dispatch(editorEditOption(idsAndProperties)),
})

export default connect(null, mapDispatchToProps)(SlideEditorQuizOption)
