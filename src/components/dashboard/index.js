import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Home</h2>
      <div className="goToPage">
        <Link className="pageLink" to="/users">
          Users
        </Link>
        <Link className="pageLink" to="/blogs">
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
