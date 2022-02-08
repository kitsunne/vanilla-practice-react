import React from "react";
import styled from "styled-components";

const Categories = ({ categories, filterItems }) => {
  return (
    <FilterButtonContainer>
      {categories.map((category, index) => {
        return (
          <FilterButton
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </FilterButton>
        );
      })}
    </FilterButtonContainer>
  );
};

const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    display: grid;
    width: 300px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 35px);
    margin-bottom: 40px;
    grid-gap: 5px;
  }
`;
const FilterButton = styled.button`
  background: transparent;
  border-color: var(--clr-gold);
  font-size: 18px;
  text-transform: capitalize;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  border-radius: var(--radius);
  padding: 0.375rem 0.75rem;
  color: var(--clr-gold);
  cursor: pointer;
  transition: var(--transition);
  margin-top: 30px;
  &:hover {
    background: var(--clr-gold);
    color: var(--clr-white);
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-top: 5px;
    width: 80px;
    padding: 0.1rem 0.4rem;
  }
`;

export default Categories;
