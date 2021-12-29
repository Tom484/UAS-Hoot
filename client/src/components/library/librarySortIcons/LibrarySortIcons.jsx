import React from "react"
import { withRouter } from "react-router-dom"
import { ICONCalendarOutline, ICONEditOutline, ICONHeartOutline } from "../../../icons/Icons"
import { LIBRARY_ROUTES } from "../../../routes/library/LibraryRoutes"

import "./librarySortIcons.scss"

const LibrarySortIcons = ({ location, history }) => {
  const path = location.pathname

  return (
    <div className="library-sort-icons">
      <ICONEditOutline
        className={`sort-icon ${path === LIBRARY_ROUTES.RECENT ? "active" : ""}`}
        onClick={() => history.push(LIBRARY_ROUTES.RECENT)}
      />
      <ICONCalendarOutline
        className={`sort-icon ${path === LIBRARY_ROUTES.CREATED ? "active" : ""}`}
        onClick={() => history.push(LIBRARY_ROUTES.CREATED)}
      />
      <ICONHeartOutline
        className={`sort-icon ${path === LIBRARY_ROUTES.FAVORITES ? "active" : ""}`}
        onClick={() => history.push(LIBRARY_ROUTES.FAVORITES)}
      />
    </div>
  )
}

export default withRouter(LibrarySortIcons)
