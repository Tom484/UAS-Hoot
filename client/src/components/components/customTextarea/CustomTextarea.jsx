import React from "react"
import TextareaAutosize from "react-textarea-autosize"
import { CustomTextInfoSmall } from "../customText/CustomText"

import "./customTextarea.scss"

export const CustomTextarea = ({ center, className, ...properties }) => {
  return (
    <TextareaAutosize
      className={`custom-textarea ${center ? "text-center" : ""} ${className}`}
      {...properties}
    />
  )
}

export const CustomTextareaWithLabel = ({ label, className, classNameTextarea, ...properties }) => {
  return (
    <div className={`custom-textarea-with-label ${className}`}>
      <CustomTextInfoSmall>{label}</CustomTextInfoSmall>
      <CustomTextarea className={classNameTextarea} {...properties} />
    </div>
  )
}
