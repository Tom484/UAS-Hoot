import React from "react"
import TextareaAutosize from "react-textarea-autosize"
import { CustomTextInfoSmall } from "../../custom/customText/CustomText"

import "./customTextarea.scss"

export const CustomTextarea = ({ center, className, ...properties }) => {
  return (
    <TextareaAutosize
      className={`custom-textarea ${center ? "text-center" : ""} ${className}`}
      {...properties}
    />
  )
}

export const CustomTextareaWithLabel = ({
  label,
  className,
  classNameTextarea,
  style,
  styleTextarea,
  ...properties
}) => {
  return (
    <div className={`custom-textarea-with-label ${className}`} style={style}>
      <CustomTextInfoSmall>{label}</CustomTextInfoSmall>
      <CustomTextarea style={styleTextarea} className={classNameTextarea} {...properties} />
    </div>
  )
}
