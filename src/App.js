import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Modal from "./Components/Modal/Modal";
import QaContainer from "./Components/Questions/QaContainer";
import Reviews from "./Components/Reviews/Reviews";
import Slider from "./Components/Slider/Slider";
import GroceryBud from "./Components/GroceryBud/GroceryBud";
import Tabs from "./Components/Tabs/Tabs";
import CountDownTimer from "./Components/CountdownTimer/CountDownTimer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Menu from "./Components/Menu/Menu";
import Generator from "./Components/Generator/Generator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ItemNavBar from "./Components/ItemsNavBar/ItemsNavBar";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <NavBar />
        <ItemNavBar />
        <AppWrapperContent>
          <Routes>
            <Route exact path="/modal" element={<Modal />} />
            <Route exact path="/qa" element={<QaContainer />} />
            <Route exact path="/reviews" element={<Reviews />} />
            <Route exact path="/slider" element={<Slider />} />
            <Route exact path="/grocerybud" element={<GroceryBud />} />
            <Route exact path="/tabs" element={<Tabs />} />
            <Route exact path="/timer" element={<CountDownTimer />} />
            <Route exact path="/videoplayer" element={<VideoPlayer />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/generator" element={<Generator />} />
          </Routes>
        </AppWrapperContent>
      </AppWrapper>
    </BrowserRouter>
  );
};

const AppWrapper = styled.div`
  display: grid;
  width: 1200px;
  grid-template-areas:
    "header header"
    "nav content";
  grid-template-rows: 100px 1fr;
  grid-template-columns: 3fr 10fr;
  grid-gap: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25), 0 15px 25px rgba(0, 0, 0, 0.25);
`;

const AppWrapperContent = styled.div`
  grid-area: cont;
  background-color: #fecea8;
`;

export default App;
