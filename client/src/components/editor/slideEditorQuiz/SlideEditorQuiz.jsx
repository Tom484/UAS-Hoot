import React from "react"
import SlideEditorQuestion from "../slideEditorQuestion/SlideEditorQuestion"
import SlideEditorQuizOptions from "../slideEditorQuizOptions/SlideEditorQuizOptions"

import "./slideEditorQuiz.scss"

const SlideEditorQuiz = () => {
  return (
    <div>
      <SlideEditorQuestion />
      <SlideEditorQuizOptions />
    </div>
  )
}

export default SlideEditorQuiz
