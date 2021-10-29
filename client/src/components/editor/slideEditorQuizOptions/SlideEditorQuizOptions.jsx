import React from "react"
import { connect } from "react-redux"
import { selectEditorOptionsArrayCurrent } from "../../../redux/editor/editorSelectors"
import SlideEditorQuizOption from "../slideEditorQuizOption/SlideEditorQuizOption"

import "./slideEditorQuizOptions.scss"

const SlideEditorQuizOptions = ({ optionsArray }) => {
  return (
    <div>
      {optionsArray.map((option, i) => (
        <SlideEditorQuizOption key={option.id} option={option} order={i + 1} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  optionsArray: selectEditorOptionsArrayCurrent(state),
})

export default connect(mapStateToProps)(SlideEditorQuizOptions)
