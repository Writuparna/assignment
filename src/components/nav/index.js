import React from "react";
import { Link,NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "./../../util/action/users";

const Nav = () => {
  const { loggedUser } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(userLogout(""));
  };

  return (
    <header>
      <h1>
        <Link to="/">Assignment</Link>
      </h1>
      {loggedUser && (
        <div>
          <nav className="navigation">
            <ul>
              <li>
                <NavLink activeClassName="active" to="/home" >
                  Home
                </NavLink>
                {/* <Link to="/home">Home</Link> */}
              </li>
              <li>                
                <NavLink activeClassName="active"  to="/users" >
                  Users
                </NavLink>
                {/* <Link to="/users">Users</Link> */}
              </li>
              <li>             
                <NavLink activeClassName="active"  to="/blogs" >
                  Blogs
                </NavLink>
                {/* <Link to="/blogs">Blogs</Link> */}
              </li>
            </ul>
            <div className="logout" onClick={handleLogout}>
              Logout
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
