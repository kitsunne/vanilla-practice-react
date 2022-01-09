import React from "react";
import "./menu.css";
import items from "./items";
import { useState } from "react";
import MenuItem from "./MenuItem";
import Categories from "./Categories";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menu = () => {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<div className="menu-wrapper">
			<div className="menu-header">
				<h1>Our Menu</h1>
				<div className="underline"></div>
			</div>
			<Categories categories={categories} filterItems={filterItems} />
			<MenuItem items={menuItems} />
		</div>
	);
};

const MenuBtn = ({ text, onClick }) => {
	return (
		<button className="filter-btn" onClick={onClick} type="button">
			{text}
		</button>
	);
};

export default Menu;
