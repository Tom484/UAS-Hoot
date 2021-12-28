import React from "react"
import { Redirect, Switch } from "react-router-dom"
import Navbar from "../../components/components/navbar/Navbar"
import PrivateRoute from "../../components/components/privateRoute/PrivateRoute"
import LibraryPage from "../../pages/library/LibraryPage"
import { AUTH_ROUTES } from "../auth/AuthRoutes"
import { NOT_FOUND_ROUTES } from "../notFound/NotFoundRoutes"

export const LIBRARY_ROUTES = {
  RECENT: "/library/recent",
  CREATED: "/library/created",
  FAVORITES: "/library/favorites",
}

const LibraryRoutes = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Navbar />
      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={AUTH_ROUTES.SIGN_IN}
          path={LIBRARY_ROUTES.RECENT}
          component={LibraryPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={AUTH_ROUTES.SIGN_IN}
          path={LIBRARY_ROUTES.CREATED}
          component={LibraryPage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={AUTH_ROUTES.SIGN_IN}
          path={LIBRARY_ROUTES.FAVORITES}
          component={LibraryPage}
        />
        <Redirect to={NOT_FOUND_ROUTES.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default LibraryRoutes
