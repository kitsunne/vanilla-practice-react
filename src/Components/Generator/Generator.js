import { useState } from "react";
import data from "./data";
import styled from "styled-components";

const Generator = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 9) {
      amount = 9;
    }
    if (count <= 0) {
      amount = null;
    }
    setText(data.slice(0, amount));
  };

  return (
    <GeneratorWrapper>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <GeneratorSelector onSubmit={handleSubmit}>
        <label for="amount">Paragraphs:</label>
        <GeneratorForm
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <GeneratorButton type="submit">Generate</GeneratorButton>
      </GeneratorSelector>
      <Paragraph>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </Paragraph>
    </GeneratorWrapper>
  );
};
const GeneratorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px auto;
  width: 95vw;

  @media screen and (max-width: 768px) {
    width: 85vw;
    margin: 140px auto;
  }
  h1 {
    font-size: 40px;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

const GeneratorSelector = styled.form`
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: var(--fixed-width);
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
  label {
    font-size: 25px;
    color: black;
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  #amount {
    border: 2px solid var(--clr-primary-5);
  }
`;

const GeneratorForm = styled.input`
  padding: 0.25rem 0.5rem;
  width: 50px;
  border-radius: var(--radius);
  margin: 0 0.5rem;
  font-size: 1.25rem;
  @media screen and (max-width: 768px) {
    padding: 0.1rem 0.5rem;
    width: 20px;
  }
`;
const GeneratorButton = styled.button`
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-1);
  padding: 0.375rem 0.75rem;
  letter-spacing: 1px;
  display: inline-block;
  transition: var(--transition);
  font-size: 15px;
  border: 2px solid var(--clr-primary-5);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  &:hover {
    color: var(--clr-primary-5);
    background: var(--clr-primary-8);
    border-color: var(--clr-primary-8);
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Paragraph = styled.div`
  max-width: var(--fixed-width);
  text-align: center;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export default Generator;
