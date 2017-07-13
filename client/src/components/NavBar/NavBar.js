import React from 'react';
import {clearfix, header, nav, auth} from './NavStyle.css'

const NavBar = (props) => {
	console.log(props.user);
		return (
			<div className={clearfix}>
				<header className={header}>
					<nav className={nav}>
						<ul>
							<li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
							<li><a href="/trucks">Local Trucks</a></li>

						</ul>
						<ul className={auth}>
							<li><a href="/signup">Sign Up</a></li>
							<li><a href="/login">Login</a></li>
						</ul>
					</nav>
				</header>
			</div>
		);

};




export default NavBar;
