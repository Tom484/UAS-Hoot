import React from "react"
import useWindowSize from "../../../functions/hooks/useWindowSize"

import "./lineBackground.scss"

const LineBackground = () => {
  const { width } = useWindowSize()

  let countOfLines = 0
  if (width > 1250) countOfLines = 9
  else if (width > 1000) countOfLines = 8
  else if (width > 750) countOfLines = 7
  else if (width > 600) countOfLines = 6
  else if (width > 450) countOfLines = 5
  else if (width > 350) countOfLines = 4
  else countOfLines = 3

  return (
    <div className="line-background">
      {[...Array(countOfLines)].map((e, i) => (
        <span key={i} className="line"></span>
      ))}
    </div>
  )
}

export default LineBackground
