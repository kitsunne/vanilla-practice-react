import React, { useState } from "react";
import ModalHidden from "./ModalHidden";
import styled from "styled-components";

const Modal = () => {
	const ModalOpenBtn = styled.button`
	    text-transform: uppercase;
	    background: transparent;
        color: var(--clr-black);
        padding: 0.375rem 0.75rem;
        letter-spacing: var(--spacing);
        display: inline-block;
        transition: var(--transition);
        font-size: 0.875rem;
        border: 2px solid var(--clr-primary-5);
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius);
	   &:hover {
		    background: var(--clr-primary-5);
            color: var(--clr-white);
		   }
	   }`;

	const ModalBanner = styled.div`
		display: grid;
		grid-gap: 25px;
		place-items: center;
		background: var(--clr-white);
		padding: 4rem 0;
		border-radius: var(--radius);
		box-shadow: var(--light-shadow);
		text-align: center;
		width: 90vw;
		max-width: var(--fixed-width);
	`;

	const ModalWrapper = styled.div`
		min-height: 100vh;
		display: grid;
		place-items: center;
	`;

	const [isModalOpen, setModalOpen] = useState(false);
	return (
		<ModalWrapper>
			<ModalBanner>
				<h1>modal project</h1>
				<ModalOpenBtn onClick={() => setModalOpen(true)}>
					OPEN MODAL
				</ModalOpenBtn>
				<ModalHidden
					isOpen={isModalOpen}
					closeModal={() => setModalOpen(false)}
				/>
			</ModalBanner>
		</ModalWrapper>
	);
};

export default Modal;
