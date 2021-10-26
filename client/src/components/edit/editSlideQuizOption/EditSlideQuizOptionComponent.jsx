import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import TextareaAutosize from "react-textarea-autosize"
import { editOption } from "../../../redux/collections/collectionsActions"
import {
  ICONCloudBroken,
  ICONDropBroken,
  ICONFlashBroken,
  ICONMoonBroken,
  ICONTickSquareBold,
} from "../../../icons/Icons"

import "./editSlideQuizOptionComponent.scss"

const EditSlideQuizOptionComponent = ({ option, order, editOption, match }) => {
  const editOptionProperties = properties => {
    return editOption({
      collectionId: match.params.collectionId,
      optionId: option.id,
      properties,
    })
  }

  return (
    <div className="select-answer-component textarea-container">
      <span className="characters-left">{75 - option.option.length}</span>
      {order === 1 && <ICONFlashBroken className="svg-icon-default-size svg-icon-default-color" />}
      {order === 2 && <ICONCloudBroken className="svg-icon-default-size svg-icon-default-color" />}
      {order === 3 && <ICONDropBroken className="svg-icon-default-size svg-icon-default-color" />}
      {order === 4 && <ICONMoonBroken className="svg-icon-default-size svg-icon-default-color" />}

      <TextareaAutosize
        className="textarea-create textarea textarea-answer"
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
  editOption: idsAndProperties => dispatch(editOption(idsAndProperties)),
})

export default withRouter(connect(null, mapDispatchToProps)(EditSlideQuizOptionComponent))
