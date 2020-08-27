import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	const activeStyle = { color: '#17a2b8' };

	return (
		<nav
			className="navbar navbar-expand-lg navbar-light"
			style={{ backgroundColor: '#f79205' }}
		>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink
							className="nav-link"
							activeStyle={activeStyle}
							exact
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" activeStyle={activeStyle} to="/books">
							Books
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" activeStyle={activeStyle} to="/about">
							About
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
