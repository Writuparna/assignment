import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedUser } = useSelector((state) => state.userReducer);

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedUser ? (
          <div className="content">
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
