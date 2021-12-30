import React from "react"
import "./customText.scss"

export const CustomTextExtraLarge = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-extra-large ${className} ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}
export const CustomTextLarge = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-large ${className} ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}
export const CustomTextMedium = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-medium ${className} ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}
export const CustomTextSmall = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-small ${className} ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}

export const CustomTextInfoLarge = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-info-large ${className}  ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}
export const CustomTextInfoMedium = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-info-medium ${className}  ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}
export const CustomTextInfoSmall = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-info-small ${className} ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}

export const CustomTextInfoBgLarge = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-info-bg-large ${className}  ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}
export const CustomTextInfoBgMedium = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-info-bg-medium ${className}  ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}
export const CustomTextInfoBgSmall = ({ children, className, center = false, ...properties }) => {
  return (
    <div
      className={`custom-text-info-bg-small ${className}  ${center ? "text-center" : ""}`}
      {...properties}
    >
      {children}
    </div>
  )
}
