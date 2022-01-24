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
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ItemNavBar from "./Components/ItemsNavBar/ItemsNavBar";

const App = () => {
  return (
    <AppWrapper>
      <NavBar />
      <ItemNavBar />
      <AppWrapperContent>
        <Routes>
          <Route path="modal" element={<Modal />} />
          <Route path="qa" element={<QaContainer />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="slider" element={<Slider />} />
          <Route path="grocerybud" element={<GroceryBud />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="timer" element={<CountDownTimer />} />
          <Route path="videoplayer" element={<VideoPlayer />} />
          <Route path="menu" element={<Menu />} />
          <Route path="generator" element={<Generator />} />
        </Routes>
      </AppWrapperContent>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-areas:
    "header header"
    "nav content";
  grid-template-rows: 100px 2fr;
  grid-template-columns: 3fr 10fr;
  grid-gap: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25), 0 15px 25px rgba(0, 0, 0, 0.25);
`;

const AppWrapperContent = styled.div`
  background-color: white;
`;

export default App;
