import React from "react"
import { withRouter } from "react-router-dom"
import {
  ICONCalendarBold,
  ICONCalendarOutline,
  ICONEditBold,
  ICONEditOutline,
  ICONHeartBold,
  ICONHeartOutline,
} from "../../../icons/Icons"
import { LIBRARY_ROUTES } from "../../../routes/library/LibraryRoutes"

import "./librarySortIcons.scss"

const LibrarySortIcons = ({ location, history }) => {
  const path = location.pathname

  return (
    <div className="library-sort-icons">
      <span onClick={() => history.push(LIBRARY_ROUTES.RECENT)}>
        {path === LIBRARY_ROUTES.RECENT ? (
          <ICONEditBold className="sort-icon active" />
        ) : (
          <ICONEditOutline className="sort-icon" />
        )}
      </span>
      <span onClick={() => history.push(LIBRARY_ROUTES.CREATED)}>
        {path === LIBRARY_ROUTES.CREATED ? (
          <ICONCalendarBold className="sort-icon active" />
        ) : (
          <ICONCalendarOutline className="sort-icon" />
        )}
      </span>
      <span onClick={() => history.push(LIBRARY_ROUTES.FAVORITES)}>
        {path === LIBRARY_ROUTES.FAVORITES ? (
          <ICONHeartBold className="sort-icon active" />
        ) : (
          <ICONHeartOutline className="sort-icon" />
        )}
      </span>
    </div>
  )
}

export default withRouter(LibrarySortIcons)
