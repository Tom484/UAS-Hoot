import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import LibraryPage from "../../pages/library/library/LibraryPage"
import { AUTH_ROUTES } from "../auth/AuthRoutes"
import { NOT_FOUND_ROUTES } from "../notFound/NotFoundRoutes"

export const LIBRARY_ROUTES = {
  RECENT: "/library/recent",
  CREATED: "/library/created",
  FAVORITES: "/library/favorites",
  INITIAL: "/library",
}

const LibraryRoutes = () => {
  return (
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
  )
}

export default LibraryRoutes
