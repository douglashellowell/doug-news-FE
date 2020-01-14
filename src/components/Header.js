import React from 'react';
import { Link } from '@reach/router';
import Nav from './Nav';

const Header = () => {
	return (
		<>
			<header id="app-header">
				<Link to="/">
					<h1 id="header-logo">doug-news</h1>
				</Link>
				<section id="logged-in-user">
					<p>doug_username_123</p>
					<div id="logged-in-user-pic"></div>
				</section>
			</header>
			<Nav />
		</>
	);
};

export default Header;
