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
import {Routes,Link}from "react-router-dom"

const App = () => {
	return (
		
		
		<div className="app-wrapper">
		
<Routes>
			<NavBar />
			<Modal />
			<QaContainer />
			<Reviews />
			<Slider />
			<GroceryBud />
			<Tabs />
			<CountDownTimer />
			<VideoPlayer />
			<Menu />
			<Generator />
			</Routes>
		</div>
	);
};

export default App;
