import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav id="app-nav">
      <Link to="/articles">
        <button className="nav-btn">Articles</button>
      </Link>
      {/* <Link to='/post'>
				<button className="nav-btn" id="post-article">
					Post Article
				</button>
			</Link> */}
    </nav>
  );
};

export default Nav;
