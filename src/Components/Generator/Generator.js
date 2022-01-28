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
  margin: 80px auto;
  h1 {
    font-size: 40px;
    text-align: center;
  }
`;

const GeneratorSelector = styled.form`
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    font-size: 25px;
    color: black;
  }
  #amount {
    border: 2px solid var(--clr-primary-5);
  }
`;

const GeneratorForm = styled.input`
  padding: 0.25rem 0.5rem;
  width: 4rem;
  border-radius: var(--radius);
  margin: 0 0.5rem;
  font-size: 1.25rem;
`;
const GeneratorButton = styled.button`
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-1);
  padding: 0.375rem 0.75rem;
  letter-spacing: 1px;
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-primary-5);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  &:hover {
    color: var(--clr-primary-5);
    background: var(--clr-primary-8);
    border-color: var(--clr-primary-8);
  }
`;
const Paragraph = styled.div`
  width: 600px;
  text-align: center;
  p {
    font-size: 15px;
  }
`;

export default Generator;
