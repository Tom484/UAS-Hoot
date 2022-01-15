import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import LibraryPage from "../../pages/library/library/LibraryPage"
import ROUTES from "../routes"

const LibraryRoutes = () => {
  return (
    <Switch>
      <PrivateRoute
        exact
        onlyLogged={true}
        redirect={ROUTES.AUTH.SIGN_IN}
        path={ROUTES.LIBRARY.RECENT}
        component={LibraryPage}
      />
      <PrivateRoute
        exact
        onlyLogged={true}
        redirect={ROUTES.AUTH.SIGN_IN}
        path={ROUTES.LIBRARY.CREATED}
        component={LibraryPage}
      />
      <PrivateRoute
        exact
        onlyLogged={true}
        redirect={ROUTES.AUTH.SIGN_IN}
        path={ROUTES.LIBRARY.FAVORITES}
        component={LibraryPage}
      />
      <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
    </Switch>
  )
}

export default LibraryRoutes
