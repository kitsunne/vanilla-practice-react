import React, { useState } from "react";
import styled from "styled-components";
import devices from "../../Properties/sizes";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <QuestionWrapper>
      <QuestionHeader>
        <h4>{title}</h4>
        <QuestionButton onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <ChangedBtn className="fas fa-angle-right move" />
          ) : (
            <DefaultBtn className="fas fa-angle-right" />
          )}
        </QuestionButton>
      </QuestionHeader>
      {showInfo && <QuestionInfo>{info}</QuestionInfo>}
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.article`
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  width: 500px;
  border: 2px solid var(--clr-primary-5);
  @media screen and (max-width: 768px) {
    padding: 0.2rem 1rem;
    width: 230px;
  }
`;
const QuestionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const QuestionInfo = styled.p`
  color: var(--clr-grey-3);
  margin-bottom: 0;
  margin-top: 0.5rem;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const QuestionButton = styled.button`
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
`;
const ChangedBtn = styled.i`
  transform: rotate(270deg);
  color: var(--clr-gold);
  font-size: 25px;
  font-weight: bold;
`;
const DefaultBtn = styled.i`
  font-size: 25px;
  font-weight: bold;
`;

export default Question;
