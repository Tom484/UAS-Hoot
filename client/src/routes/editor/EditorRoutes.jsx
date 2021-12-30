import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/components/privateRoute/PrivateRoute"
import EditorPage from "../../pages/editor/editor/EditorPage"
import { AUTH_ROUTES } from "../auth/AuthRoutes"
import { NOT_FOUND_ROUTES } from "../notFound/NotFoundRoutes"

export const EDITOR_ROUTES = {
  EDITOR: "/editor/:collectionId",
  INITIAL: "/editor",
}

const EditorRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={AUTH_ROUTES.SIGN_IN}
          path={EDITOR_ROUTES.EDITOR}
          component={EditorPage}
        />
        <Redirect to={NOT_FOUND_ROUTES.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default EditorRoutes
