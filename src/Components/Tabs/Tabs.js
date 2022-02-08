import React from "react";
import TabComponent from "./TabComponent";
import styled from "styled-components";

const Tabs = () => {
  return (
    <TabsWrapper>
      <TabsHeader>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
      </TabsHeader>
      <TabsContentContainer>
        <TabsImgContainer>
          <img
            src="https://github.com/john-smilga/javascript-basic-projects/blob/master/11-tabs/final/hero-bcg.jpeg?raw=true"
            alt="TabImage"
          />
        </TabsImgContainer>
        <TabComponent />
      </TabsContentContainer>
    </TabsWrapper>
  );
};
const TabsWrapper = styled.div`
  margin: 100px auto;
  display: grid;
  place-items: center;
  width: 95vw;
  @media screen and (max-width: 768px) {
    width: 85vw;
    display: flex;
    flex-direction: column;
  }
`;
const TabsHeader = styled.div`
  text-align: center;
  margin-bottom: 25px;
  h2 {
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  p {
    font-size: 20px;
    width: 80%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const TabsContentContainer = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 15px;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const TabsImgContainer = styled.div`
  margin-bottom: 1rem;
  margin: 0 30px;
  @media screen and (max-width: 768px) {
    margin: 50px 0 30px;
  }
  img {
    border-radius: var(--radius);
    object-fit: cover;
    width: 450px;
    height: 330px;
    @media screen and (max-width: 768px) {
      width: 270px;
      height: 170px;
    }
  }
`;

export default Tabs;
