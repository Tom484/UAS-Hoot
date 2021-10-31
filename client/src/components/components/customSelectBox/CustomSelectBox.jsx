import React from "react"
import Select from "react-select"

import "./customSelectBox.scss"

const CustomSelectBox = ({ ...props }) => {
  return <Select theme={theme} {...props} />
}

const theme = theme => ({
  ...theme,
  borderRadius: 4,
  colors: {
    ...theme.colors,
    primary75: "#e9e9e9",
    primary50: "#e9e9e9",
    primary25: "#e9e9e9",
    primary: "#6070ff",
  },
})

export default CustomSelectBox
