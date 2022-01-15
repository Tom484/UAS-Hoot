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
import ROUTES from "../../../routes/routes"

import "./librarySortIcons.scss"

const LibrarySortIcons = ({ location, history }) => {
  const path = location.pathname

  return (
    <div className="library-sort-icons">
      <span onClick={() => history.push(ROUTES.LIBRARY.RECENT)}>
        {path === ROUTES.LIBRARY.RECENT ? (
          <ICONEditBold className="sort-icon active" />
        ) : (
          <ICONEditOutline className="sort-icon" />
        )}
      </span>
      <span onClick={() => history.push(ROUTES.LIBRARY.CREATED)}>
        {path === ROUTES.LIBRARY.CREATED ? (
          <ICONCalendarBold className="sort-icon active" />
        ) : (
          <ICONCalendarOutline className="sort-icon" />
        )}
      </span>
      <span onClick={() => history.push(ROUTES.LIBRARY.FAVORITES)}>
        {path === ROUTES.LIBRARY.FAVORITES ? (
          <ICONHeartBold className="sort-icon active" />
        ) : (
          <ICONHeartOutline className="sort-icon" />
        )}
      </span>
    </div>
  )
}

export default withRouter(LibrarySortIcons)
