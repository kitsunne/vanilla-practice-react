import React from "react";
import items from "./items";
import { useState } from "react";
import MenuItem from "./MenuItem";
import Categories from "./Categories";
import styled from "styled-components";
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
    <MenuWrapper>
      <MenuHeader>
        <h1>Our Menu</h1>
        <Underline />
      </MenuHeader>
      <Categories categories={categories} filterItems={filterItems} />
      <MenuItem items={menuItems} />
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  width: 95vw;
  max-width: var(--max-width);
  @media screen and (max-width: 768px) {
    margin: 100px auto;
    width: 80vw;
  }
`;

const MenuHeader = styled.div`
  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
`;

const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;
export default Menu;
