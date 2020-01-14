import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
	return (
		<nav id="app-nav">
			<Link to="/articles">
				<button className="nav-btn">New</button>
			</Link>
			<Link to="/articles?sort_by=votes">
				<button className="nav-btn">Most Votes</button>
			</Link>
			<button className="nav-btn">Most Comments</button>
			<button className="nav-btn">View Topics</button>
			<button className="nav-btn" id="post-article">
				Post Article
			</button>
		</nav>
	);
};

export default Nav;
