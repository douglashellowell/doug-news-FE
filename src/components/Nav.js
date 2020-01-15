import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav id="app-nav">
      <Link to="/articles">
        <button className="nav-btn">Articles</button>
      </Link>
      <Link to="/topics">
        <button className="nav-btn">Topics</button>
      </Link>
    </nav>
  );
};

export default Nav;
