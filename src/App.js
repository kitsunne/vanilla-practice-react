import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Modal from "./Components/Modal/Modal";
import Questions from "./Components/Questions/Questions";
import Reviews from "./Components/Reviews/Reviews";
import Slider from "./Components/Slider/Slider";
import GroceryBud from "./Components/GroceryBud/GroceryBud";
import Tabs from "./Components/Tabs/Tabs";
import CountDownTimer from "./Components/CountdownTimer/CountDownTimer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Menu from "./Components/Menu/Menu";
import Generator from './Components/Generator/Generator';


const App = () => {
	return (
		<React.Fragment>
			<NavBar />
			<Modal />
			<Questions />
			<Reviews />
			<Slider />
			<GroceryBud />
			<Tabs />
			<CountDownTimer />
			<VideoPlayer />
			<Menu />
			<Generator/>
		</React.Fragment>
	);
};

export default App;
