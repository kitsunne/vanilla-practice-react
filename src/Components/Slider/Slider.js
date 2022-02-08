import React, { useState } from "react";
import { sliderContent } from "./sliderContent";
import styled from "styled-components";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { img } = sliderContent[index];

  return (
    <SliderWrapper>
      <SliderPicBox>
        <SlidePic src={img} alt="pic" />
      </SliderPicBox>
      <ButtonScrollContainer>
        {index > 0 ? (
          <ButtonScroll onClick={() => setIndex(index === 0 ? 0 : index - 1)}>
            prev
          </ButtonScroll>
        ) : null}

        {index >= sliderContent.length - 1 ? null : (
          <ButtonScroll
            onClick={() =>
              setIndex(index >= sliderContent.length - 1 ? 0 : index + 1)
            }
          >
            next
          </ButtonScroll>
        )}
      </ButtonScrollContainer>
    </SliderWrapper>
  );
};
const SlidePic = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;
const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px auto;
  width: 95vw;
  @media screen and (max-width: 768px) {
    width: 85vw;
  }
`;
const SliderPicBox = styled.div`
  border: 5px solid var(--clr-primary-5);
  width: 600px;
  height: 350px;
  max-width: var(--fixed-width);
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 4rem;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 170px;
  }
`;
const ButtonScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const ButtonScroll = styled.button`
  background: transparent;
  border-color: transparent;
  font-size: 30px;
  cursor: pointer;
  margin: 0 0.25rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: var(--clr-grey-5);
  transition: var(--transition);
  &:hover {
    color: var(--clr-grey-3);
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export default Slider;
