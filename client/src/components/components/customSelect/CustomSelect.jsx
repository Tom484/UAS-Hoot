import React, { useState } from "react"
import { ICONArrowDownOutline } from "../../../icons/Icons"
import { CustomTextInfoSmall } from "../customText/CustomText"

import "./customSelect.scss"

const CustomSelect = ({ options = [], onChange, option, style, theme = "background-2" }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="custom-select-container" style={style}>
      <div
        className={`custom-select ${open ? "open" : ""} ${theme}`}
        onClick={() => setOpen(previousOpen => !previousOpen)}
      >
        {option.label}
        <ICONArrowDownOutline className="custom-select-icon" />
      </div>
      <div className="custom-select-menu" style={{ display: open ? "block" : "none" }}>
        {options.map((item, i) => (
          <div
            key={i}
            className={`select ${item.value === option.value ? "active" : ""}`}
            onClick={() => {
              onChange(item)
              setOpen(false)
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomSelect

export const CustomSelectWithLabel = ({ label, ...properties }) => {
  return (
    <div className="custom-select-with-label">
      <CustomTextInfoSmall>{label}</CustomTextInfoSmall>
      <CustomSelect {...properties} />
    </div>
  )
}
