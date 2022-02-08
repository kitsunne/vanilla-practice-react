import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import styled from "styled-components";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function GroceryBud() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <GroceryBudWrapper>
      <GroceryBudContent>
        <GroceryForm onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}

          <h3>GROCERY BUD</h3>
          <FormControl>
            <Grocery
              type="text"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <SubmitButton type="submit">
              {isEditing ? "edit" : "submit"}
            </SubmitButton>
          </FormControl>
        </GroceryForm>
        {list.length > 0 && (
          <div>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <ClearButton onClick={clearList}>clear items</ClearButton>
          </div>
        )}
      </GroceryBudContent>
    </GroceryBudWrapper>
  );
}
const SubmitButton = styled.button`
  background: var(--clr-primary-8);
  border-color: transparent;
  flex: 0 0 5rem;
  display: grid;
  align-items: center;
  padding: 0.25rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  cursor: pointer;
  content: var(--clr-primary-5);
  transition: var(--transition);
  font-size: 0.85rem;
  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
`;
const GroceryBudWrapper = styled.div`
  margin: 120px auto;
  width: 95vw;
  height: 60vh;
  max-width: var(--max-width);
  @media screen and (max-width: 768px) {
    width: 85vw;
    margin: 160px auto;
  }
`;
const GroceryBudContent = styled.section`
  margin: 0 auto;
  max-width: 35rem;
  margin-top: 8rem;
  background: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  padding: 2rem;
  margin-bottom: 100px;
  &:hover {
    box-shadow: var(--dark-shadow);
  }
`;
const GroceryForm = styled.form`
  h3 {
    color: var(--clr-primary-1);
    margin-bottom: 1.5rem;
    font-size: 25px;
    text-align: center;
    text-decoration: capitalize;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
const FormControl = styled.div`
  display: flex;
  justify-content: center;
`;

const Grocery = styled.input`
  padding: 0.35rem;
  padding-left: 1rem;
  background: var(--clr-grey-10);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-color: transparent;
  font-size: 1rem;
  flex: 1 0 auto;
  color: var(--clr-grey-5);
  &::placeholder {
    font-family: var(--ff-secondary);
    color: var(--clr-grey-5);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const ClearButton = styled.button`
  text-transform: capitalize;
  width: 10rem;
  height: 1.5rem;
  display: grid;
  align-items: center;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-light);
  margin: 0 auto;
  font-size: 0.85rem;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  margin-top: 1.25rem;
  &:hover {
    color: var(--clr-red-dark);
  }
`;
export default GroceryBud;
