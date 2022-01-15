import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import DiscoverPage from "../../pages/discover/discover/DiscoverPage"
import { AUTH_ROUTES } from "../auth/AuthRoutes"
import { NOT_FOUND_ROUTES } from "../notFound/NotFoundRoutes"

export const DISCOVER_ROUTES = {
  DEFAULT: "/discover",
  INITIAL: "/discover",
}

const DiscoverRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={AUTH_ROUTES.SIGN_IN}
          path={DISCOVER_ROUTES.DEFAULT}
          component={DiscoverPage}
        />
        <Redirect to={NOT_FOUND_ROUTES.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default DiscoverRoutes
