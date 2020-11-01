import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div>
      <h2>Home</h2>
      <div className="goToPage">
        <Link className="pageLink" to="/users">
          <FontAwesomeIcon icon={faUser} />
          Users
        </Link>
        <Link className="pageLink" to="/blogs">
          <FontAwesomeIcon icon={faUserEdit} />
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
