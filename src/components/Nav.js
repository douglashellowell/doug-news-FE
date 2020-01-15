import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav id="app-nav">
      <Link to="/articles">
        <button className="nav-btn">All Articles</button>
      </Link>
      <Link to="/topics">
        <button className="nav-btn">Topics</button>
      </Link>
      <Link to="/users">
        <button className="nav-btn">Users</button>
      </Link>
    </nav>
  );
};

export default Nav;
