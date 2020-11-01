import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Blog from "../blog";
import BlogDetails from "../blog/details";
import Dashboard from "../dashboard";
import Nav from "../nav";
import Users from "../users";
import Login from "../login";
import NotFound from "../404";
import PrivateRoute from "../../util/route/privateRoute";
import PublicRoute from "../../util/route/publicRoute";

export default function PageRouting() {
  return (
    <Router>
      <Nav />
      <Switch className="container">
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/home" component={Dashboard} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/blogs" component={Blog} />
        <PrivateRoute exact path="/blog/:blogId" component={BlogDetails} />
        <PublicRoute exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
