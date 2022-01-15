import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import AccountPage from "../../pages/auth/account/AccountPage"
import ResetPasswordEmailPage from "../../pages/auth/resetPasswordEmail/ResetPasswordEmailPage"
import SignInPage from "../../pages/auth/signIn/SignInPage"
import SignUpPage from "../../pages/auth/signUp/SignUpPage"
import ROUTES from "../routes"

const AuthRoutes = () => {
  return (
    <Switch>
      <PrivateRoute
        exact
        onlyLogged={false}
        redirect={ROUTES.AUTH.ACCOUNT}
        path={ROUTES.AUTH.SIGN_IN}
        component={SignInPage}
      />
      <PrivateRoute
        exact
        onlyLogged={false}
        redirect={ROUTES.AUTH.ACCOUNT}
        path={ROUTES.AUTH.SIGN_UP}
        component={SignUpPage}
      />
      <PrivateRoute
        exact
        onlyLogged={false}
        redirect={ROUTES.AUTH.ACCOUNT}
        path={ROUTES.AUTH.RESET_PASSWORD_EMAIL}
        component={ResetPasswordEmailPage}
      />
      <PrivateRoute
        exact
        onlyLogged={true}
        redirect={ROUTES.AUTH.SIGN_IN}
        path={ROUTES.AUTH.ACCOUNT}
        component={AccountPage}
      />
      <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
    </Switch>
  )
}

export default AuthRoutes
