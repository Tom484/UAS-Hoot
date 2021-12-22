import React from "react"
import Select from "react-select"
import { CustomTextInfoSmall } from "../customText/CustomText"

import "./customSelectBox.scss"

const CustomSelectBox = ({ ...properties }) => {
  return <Select theme={themeLight} {...properties} />
}

const themeLight = theme => ({
  ...theme,
  borderRadius: 5,
  padding: 20,
  colors: {
    ...theme.colors,
    primary75: "#e9e9e9",
    primary50: "#e9e9e9",
    primary25: "#e9e9e9",
    primary: "#7134ff",
  },
})

export default CustomSelectBox

export const CustomSelectBoxWithLabel = ({ label, className, style, ...properties }) => {
  return (
    <div className={`custom-select-box-with-label ${className}`} style={style}>
      <CustomTextInfoSmall>{label}</CustomTextInfoSmall>
      <Select theme={themeLight} {...properties} />
    </div>
  )
}
