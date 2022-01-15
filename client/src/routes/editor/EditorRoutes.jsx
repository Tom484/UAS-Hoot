import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import EditorPage from "../../pages/editor/editor/EditorPage"
import ROUTES from "../routes"

const EditorRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={ROUTES.AUTH.SIGN_IN}
          path={ROUTES.EDITOR.EDITOR}
          component={EditorPage}
        />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default EditorRoutes
