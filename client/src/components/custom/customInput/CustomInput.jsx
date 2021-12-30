import { CustomTextInfoSmall } from "../../custom/customText/CustomText"

import "./customInput.scss"

export const CustomInput = ({ center, className, ...properties }) => {
  return (
    <input className={`custom-input ${center ? "text-center" : ""} ${className}`} {...properties} />
  )
}

export const CustomInputWithLabel = ({ label, className, classNameInput, ...properties }) => {
  return (
    <div className={`custom-input-with-label ${className}`}>
      <CustomTextInfoSmall>{label}</CustomTextInfoSmall>
      <CustomInput className={classNameInput} {...properties} />
    </div>
  )
}
