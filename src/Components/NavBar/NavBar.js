import React, { useState } from "react";
import "./navBar.css";
import { menuItems } from "./menuItems";
import Button from "./Button";

const NavBar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="NavbarItems">
			<h1 className="navbar-logo">
				<img
					className="fa-react"
					src="https://vanilla-js-basic-project-4-navbar.netlify.app/logo.svg"
				></img>
			</h1>
			<div className="menu-icon" onClick={() => setOpen(!open)}>
				<i className={open ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
			<ul className={open ? "nav-menu active" : "nav-menu"}>
				{menuItems.map((item, index) => {
					return (
						<li key={index}>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
