import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

const AppWrapper = styled.div`
  display: grid;
  width: 1500px;
  margin: 0 auto;
  height: 100%;
  grid-template-areas:
    "header header"
    "nav content";
  grid-template-rows: 100px 2fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 5px;
`;

const AppWrapperContent = styled.div`
  grid-area: content;
  background-color: white;
`;

export default App;
