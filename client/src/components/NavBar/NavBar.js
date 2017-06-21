import React from 'react';
import {header, nav} from './NavStyle.css'

const NavBar = (props) => {
	console.log(props.user);
		return (
			<div>
				<header className={header}>
					<nav className={nav}>
						<ul>
							<li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
							<li><a href="/trucks">Local Trucks</a></li>

						</ul>
					</nav>
				</header>
			</div>
		);

};




export default NavBar;
