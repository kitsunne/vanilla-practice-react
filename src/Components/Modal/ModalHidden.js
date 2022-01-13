import styled from "styled-components";

const ModalHidden = ({ isOpen, closeModal }) => {
	const ModalContainer = styled.div`
		position: fixed;
		top: 45%;
		left: 33.8%;
		background: rgba(73, 166, 233, 0.5);
		display: grid;
		place-items: center;
		transition: var(--transition);
		background: var(--clr-white);
		border-radius: var(--radius);
		width: 125vw;
		height: 30vh;
		max-width: var(--fixed-width);
		text-align: center;
		@media (max-width: 992px) {
			min-height: 10vh;
			top: 40%;
			left: 33.8%;
			display: grid;
			place-items: center;
		}
		@media (min-width: 600px) {
		}
	`;

	const ModalExitBtn = styled.button`
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		font-size: 1.2rem;
		background: transparent;
		border-color: transparent;
		color: var(--clr-red-dark);
		cursor: pointer;
		transition: var(--transition);
        &:hover {
				color: var(--clr-red-light);
				transform: scale(1.3);
			}
		}
	`;

	return (
		<ModalContainer style={{ visibility: isOpen ? "visible" : "hidden" }}>
			<h3>modal content</h3>
			<ModalExitBtn onClick={closeModal}>
				{<i className="fas fa-times"></i>}
			</ModalExitBtn>
		</ModalContainer>
	);
};

export default ModalHidden;
