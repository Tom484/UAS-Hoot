import React from "react"
import { connect } from "react-redux"
import TextareaAutosize from "react-textarea-autosize"
import {
  ICONCloudBroken,
  ICONDropBroken,
  ICONFlashBroken,
  ICONMoonBroken,
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
    <div>
      {order === 1 && <ICONFlashBroken className="svg-icon-default-size svg-icon-default-color" />}
      {order === 2 && <ICONCloudBroken className="svg-icon-default-size svg-icon-default-color" />}
      {order === 3 && <ICONDropBroken className="svg-icon-default-size svg-icon-default-color" />}
      {order === 4 && <ICONMoonBroken className="svg-icon-default-size svg-icon-default-color" />}

      <TextareaAutosize
        className="textarea-create textarea"
        onChange={e => editOptionProperties({ option: e.target.value })}
        placeholder={`Add answer ${order}`}
        value={option.option}
        maxLength={75}
      />

      <ICONTickSquareBold
        className={`svg-icon-default-size icon ${option.correct ? "checked" : ""}`}
        onClick={() => editOptionProperties({ correct: !option.correct })}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  editOption: idsAndProperties => dispatch(editorEditOption(idsAndProperties)),
})

export default connect(null, mapDispatchToProps)(SlideEditorQuizOption)
