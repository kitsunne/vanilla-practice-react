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
  margin-bottom: 4rem;
`;
const FilterButton = styled.button`
  background: transparent;
  border-color: var(--clr-gold);
  font-size: 1rem;
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
`;

export default Categories;
