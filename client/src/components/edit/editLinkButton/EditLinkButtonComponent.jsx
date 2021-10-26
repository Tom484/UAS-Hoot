import React from "react"
import { withRouter } from "react-router-dom"

const EditLinkButtonComponent = ({ collectionId, history, children }) => {
  const clickHandler = () => {
    history.push(`edit/${collectionId}`)
  }

  if (children) return <span onClick={clickHandler}>{children}</span>
  return (
    <button className="button button-basic" onClick={clickHandler}>
      Edit
    </button>
  )
}

export default withRouter(EditLinkButtonComponent)
