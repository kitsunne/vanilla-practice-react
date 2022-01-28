import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <GroceryItem key={id}>
            <p>{title}</p>
            <div>
              <EditButton type="button" onClick={() => editItem(id)}>
                <FaEdit />
              </EditButton>
              <DeleteButton type="button" onClick={() => removeItem(id)}>
                <FaTrash />
              </DeleteButton>
            </div>
          </GroceryItem>
        );
      })}
    </div>
  );
};

const GroceryItem = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  transition: var(--transition);
  padding: 0.25rem 1rem;
  border-radius: var(--radius);
  text-transform: capitalize;
  &:hover {
    color: var(--clr-grey-5);
    background: var(--clr-grey-10);
  }
  p {
    margin-bottom: 0;
    color: var(--clr-grey-1);
    letter-spacing: 2px;
    transition: var(--transition);
    font-size: 15px;
  }

  p:hover {
    color: var(--clr-grey-5);
  }
`;
const EditButton = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 0.7rem;
  margin: 0 0.15rem;
  transition: var(--transition);
  color: var(--clr-green-light);
  &:hover {
    color: var(--clr-green-dark);
  }
`;
const DeleteButton = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 0.7rem;
  margin: 0 0.15rem;
  transition: var(--transition);
  color: var(--clr-red-light);
  &:hover {
    color: var(--clr-red-dark);
  }
`;

export default List;
