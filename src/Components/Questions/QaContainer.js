import React, { useState } from "react";
import Question from "./Question";
import styled from "styled-components";
import questions from "./data";

const QaContainer = () => {
  const [item, setItem] = useState(questions);
  return (
    <QaWrapper>
      <QaTittleContainer>
        <QaTittle>Questions and answers about login</QaTittle>
      </QaTittleContainer>
      <QaAccordion>
        {questions.map((item) => {
          return <Question key={item.id} {...item}></Question>;
        })}
      </QaAccordion>
    </QaWrapper>
  );
};

const QaWrapper = styled.div`
  margin: 120px auto;
  max-width: var(--fixed-width);
  display: grid;
  grid-template-columns: 250px 1fr;
  width: 95vw;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
  }
  @media screen and (max-width: 320px) {
  }
`;

const QaTittleContainer = styled.div`
  justify-self: start;
  text-align: left;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    justify-self: center;
    text-align: center;
  }
`;
const QaTittle = styled.h3`
  line-height: 1;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const QaAccordion = styled.section`
  margin: 0 auto;
  max-width: var(--max-width);
`;

export default QaContainer;
