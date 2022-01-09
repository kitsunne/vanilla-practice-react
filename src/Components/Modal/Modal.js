import "./modal.css";
import "./logo.svg";
import React, { useState } from "react";

const Modal = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	return (
		<header className="hero">
			<div className="banner">
				<h1>modal project</h1>
				<ModalButton text="open modal" onClick={() => setModalOpen(true)} />
			</div>
			<ModalWindow
				isOpen={isModalOpen}
				closeModal={() => setModalOpen(false)}
			/>
		</header>
	);
};
const ModalWindow = ({ isOpen, closeModal }) => {
	return (
		<div
			style={{ visibility: isOpen ? "visible" : "hidden" }}
			className="modal-overlay"
		>
			<div className="modal-container">
				<h3>modal content</h3>
				<CloseButton
					text={<i className="fas fa-times"></i>}
					onClick={closeModal}
				/>
			</div>
		</div>
	);
};

const CloseButton = ({ text, onClick }) => {
	return (
		<button onClick={onClick} className="close-btn">
			{text}
		</button>
	);
};

const ModalButton = ({ text, onClick }) => {
	return (
		<button onClick={onClick} className="btn modal-btn">
			{text}
		</button>
	);
};

export default Modal;
