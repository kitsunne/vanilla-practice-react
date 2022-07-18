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
  align-items: center;
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    width: 300px;
    margin-bottom: 30px;
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
    font-size: 8px;
    width: 80px;
    padding: 5px 7px;
    &:nth-child(1) {
      margin-right: auto;
    }
  }
`;

export default Categories;
