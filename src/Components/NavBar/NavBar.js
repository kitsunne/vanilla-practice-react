import React, { useState } from "react";
import "./navBar.css";
import { menuItems } from "./menuItems";
import styled, { css } from "styled-components";

const NavBar = (props) => {
	const [open, setOpen] = useState(false);

	const Nav = styled.div`
		background: var(--clr-white);
		box-shadow: var(--light-shadow);
		height: 80px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		display: flex;
		width: 100vw;
		z-index: 10;

		@media (max-width: 992px) {
			position: relative;
			width: 100vw;
			display: grid;
			place-items: center;
		}
		@media (min-width: 800px) {
			width: 100vw;
			min-width: 1170px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1rem;
		}
	`;

	const LogoWrapper = styled.h1`
		justify-self: start;
		align-items: center;
		margin-left: 20px;
		cursor: pointer;
		justify-content: center;

		@media (max-width: 992px) {
		}
		@media (min-width: 800px) {
		}
	`;

	const Logo = styled.img`
		margin-left: 0.5rem;
		font-size: 1.6rem;

		@media (max-width: 992px) {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(5%, 35%);
			height: 50px;
		}
		@media (min-width: 800px) {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(25%, 40%);
			height: 40px;
		}
	`;
	const IconWrapper = styled.div`
		display: none;

		@media (max-width: 992px) {
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			transform: translate(-100%, 60%);
			cursor: pointer;
			font-size: 1.8rem;
		}
		@media (min-width: 800px) {
			display: none;
			margin-left: 10px;
		}
	`;

	const NavMenu = styled.ul`
		${(open) => {
			if (open === true) {
				css`
					background-color: #fff;
					left: 0;
					opacity: 1;
					transition: all 0.5s ease;
					z-index: 1;

					@media (max-width: 992px) {
						background-color: #fff;
						left: 0;
						opacity: 1;
						transition: all 0.5s ease;
						z-index: 1;
					}
					@media (min-width: 800px) {
					}
				`;
			} else {
				css`
					display: grid;
					grid-template-columns: repeat(5, auto);
					grid-gap: 10px;
					list-style: none;
					text-align: center;
					justify-content: end;
					margin-right: 2rem;

					@media (max-width: 992px) {
						display: flex;
						flex-direction: column;
						width: 100%;
						height: 700px;
						position: absolute;
						top: 80px;
						left: -100%;
						opacity: 1;
						transition: all 0.5s ease;
					}
					@media (min-width: 800px) {
					}
				`;
			}
		}}
	`;

	

	return (
		<Nav>
			<LogoWrapper>
				<Logo src="https://vanilla-js-basic-project-4-navbar.netlify.app/logo.svg" />
			</LogoWrapper>
			<IconWrapper onClick={() => setOpen(!open)}>
				<i className={open ? "fas fa-times" : "fas fa-bars"}></i>
			</IconWrapper>
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
		</Nav>
	);
};

export default NavBar;
