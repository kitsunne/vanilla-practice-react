import React, { useState } from "react";
import { sliderContent } from "./sliderContent";
import devices from "../../Properties/sizes";
import styled from "styled-components";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { img } = sliderContent[index];

  return (
    <section>
      <SlideWrapper>
        <SlidePic src={img} alt="pic" />
      </SlideWrapper>
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
    </section>
  );
};
const SlidePic = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;
const SlideWrapper = styled.div`
  @media ${devices.laptopL} {
  }
  @media ${devices.tablet} {
    border: 5px solid var(--clr-primary-5);
    width: 100vw;
    margin: 0 auto;
    height: 35vh;
    max-width: var(--fixed-width);
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-top: 4rem;
  }
  @media ${devices.mobileL} {
  }
`;
const ButtonScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
`;

const ButtonScroll = styled.button`
  background: transparent;
  border-color: transparent;
  font-size: 1.75rem;
  cursor: pointer;
  margin: 0 0.25rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: var(--clr-grey-5);
  transition: var(--transition);
  &:hover {
    color: var(--clr-grey-3);
  }
`;

export default Slider;
