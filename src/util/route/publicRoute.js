import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { loggedUser } = useSelector((state) => state.userReducer);

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedUser ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
