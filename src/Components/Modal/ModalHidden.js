import styled from "styled-components";

const ModalHidden = ({ isOpen, closeModal }) => {
  return (
    <ModalContainer style={{ visibility: isOpen ? "visible" : "hidden" }}>
      <ModalText>modal content</ModalText>
      <ModalExitBtn onClick={closeModal}>
        {<i className="fas fa-times"></i>}
      </ModalExitBtn>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 20%;
  margin: 0 auto;
  background: rgba(73, 166, 233, 0.5);
  display: grid;
  place-items: center;
  transition: var(--transition);
  background: var(--clr-primary-7);
  border-radius: var(--radius);
  width: 160vw;
  height: 35vh;
  max-width: var(--fixed-width);
  text-align: center;
  @media (max-width: 992px) {
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
		font-size: 2.5rem;
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
const ModalText = styled.h3`
  font-size: 2.5rem;
`;
export default ModalHidden;
