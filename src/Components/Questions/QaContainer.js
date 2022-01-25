import React, { useState } from "react";
import Question from "./Question";
import devices from "../../Properties/sizes";
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
  margin: 0 auto;
  max-width: var(--fixed-width);
  display: grid;
  grid-template-columns: 250px 1fr;
  @media ${devices.tablet} {
    min-height: auto;
    margin: 80px auto;
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns: 1fr 2fr;
  }
  @media ${devices.mobileS} {
  }
`;

const QaTittleContainer = styled.div`
  justify-self: start;
  text-align: left;
`;
const QaTittle = styled.h3`
  line-height: 1;
  font-size: 1.5rem;
  text-align: left;
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
    width: 70vw;
  }
  @media ${devices.mobileM} {
    width: 60vw;
  }
  @media ${devices.mobileS} {
    width: 40vw;
  }
`;

export default QaContainer;
