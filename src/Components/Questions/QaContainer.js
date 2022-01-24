import React, { useState } from "react";
import Question from "./Question";
import devices from "../../Properties/sizes";
import styled from "styled-components";
import questions from "./data";

const QaContainer = () => {
  const [item, setItem] = useState(questions);
  return (
    <QaWrapper>
      <QaTittle>questions and answers about login</QaTittle>
      <QaAccordion>
        {questions.map((item) => {
          return <Question key={item.id} {...item}></Question>;
        })}
      </QaAccordion>
    </QaWrapper>
  );
};

const QaWrapper = styled.div`
  width: 90vw;
  margin: 90px auto;
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  max-width: var(--fixed-width);
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
`;
const QaTittle = styled.h3`
  line-height: 1.2;
  font-weight: 500;
  margin-right: 25px;
`;
const QaAccordion = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
  @media ${devices.desktop} {
  }
  @media ${devices.laptopL} {
  }
  @media ${devices.laptop} {
    width: 95vw;
  }
  @media ${devices.tablet} {
    width: 95vw;
  }
`;

export default QaContainer;
