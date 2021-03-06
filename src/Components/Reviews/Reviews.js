import React, { useState } from "react";
import authorList from "./authorList";
import styled from "styled-components";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, img, text } = authorList[index];

  return (
    <ReviewsWrapper>
      <ReviewsHeader>
        <h1>OUR REVIEWS</h1>
        <Underline />
      </ReviewsHeader>
      <ReviewContent>
        <ImgContainer>
          <AuthorImg src={img} alt={name} />
        </ImgContainer>
        <ItemAuthor>{name}</ItemAuthor>
        <ItemJob>{job}</ItemJob>
        <ItemText>{text}</ItemText>
        <ButtonContainer>
          <ButtonSwitch
            onClick={() =>
              setIndex(index >= authorList.length == 0 ? 0 : index - 1)
            }
          >
            <i className="fas fa-chevron-left" />
          </ButtonSwitch>
          <ButtonSwitch
            onClick={() =>
              setIndex(index >= authorList.length - 1 ? 0 : index + 1)
            }
          >
            <i className="fas fa-chevron-right" />
          </ButtonSwitch>
        </ButtonContainer>
        <ButtonRandom
          onClick={() =>
            setIndex(Math.floor(Math.random() * authorList.length))
          }
        >
          surprise me
        </ButtonRandom>
      </ReviewContent>
    </ReviewsWrapper>
  );
};

const ReviewsHeader = styled.div`
  text-align: center;
`;
const ReviewContent = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  text-align: center;
  &:hover {
    box-shadow: var(--dark-shadow);
  }
`;
const ImgContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--clr-primary-5);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }
  &:after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f10e";
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }

  @media screen and (max-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;
const AuthorImg = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
`;
const ItemAuthor = styled.h4`
  margin-bottom: 0.25rem;
`;
const ItemJob = styled.h1`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: var(--clr-primary-5);
  font-size: 0.85rem;
`;
const ItemText = styled.p`
  margin-bottom: 0.75rem;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 0.3rem;
  }
`;
const ButtonContainer = styled.div``;
const ButtonSwitch = styled.button`
  color: var(--clr-primary-7);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    color: var(--clr-primary-5);
  }
`;
const ButtonRandom = styled.button`
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  margin-top: 0.5rem;
  color: var(--clr-primary-5);
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: var(--radius);
  border-color: var(--clr-primary-5);
  cursor: pointer;
  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
  }
`;
const ReviewsWrapper = styled.section`
  margin: 100px auto;
  display: grid;
  place-items: center;
  width: 95vw;
  max-width: var(--fixed-width);
  @media screen and (max-width: 768px) {
    margin: 90px auto;
    width: 85vw;
  }
`;
const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export default Reviews;
