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
  display: grid;
  place-items: center;
  width: 500px;
`;
const TabsHeader = styled.div`
  text-align: center;
  margin-bottom: 25px;
  &p {
    font-size: 1.5rem;
    width: 80%;
    margin: 0 auto;
  }
`;

const TabsContentContainer = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 15px;
  align-items: center;
`;
const TabsImgContainer = styled.div`
  margin-bottom: 1rem;
  margin: 0 30px;
  img {
    border-radius: var(--radius);
    object-fit: cover;
    width: 450px;
    height: 330px;
  }
`;

export default Tabs;
