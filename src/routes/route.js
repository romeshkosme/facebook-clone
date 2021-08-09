import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookie from 'js-cookie'

const AppRoute = ({
  component: Component,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      const user = Cookie.get('user')
      console.log("user :: ", user)
      if (isAuthProtected && !user){
        return(
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
      // else if (isAuthProtected && user) {
      //   return(
      //     <Redirect
      //       to={{ pathname: "/dashboard", state: { from: props.location } }}
      //     />
      //   )
      // }
      return (
          <Component {...props} />
      );
    }}
  />
);

export default AppRoute;