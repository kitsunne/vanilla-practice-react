import styled from "styled-components";
import { GiCancel } from "react-icons/gi";

const ModalHidden = ({ isOpen, closeModal }) => {
  return (
    <ModalContainer style={{ visibility: isOpen ? "visible" : "hidden" }}>
      <ModalText>modal content</ModalText>
      <ModalExitBtn onClick={closeModal}>
        <GiCancel />
      </ModalExitBtn>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  top: 25%;
  left: 26%;
  width: 700px;
  height: 450px;
  background: rgba(73, 166, 233, 0.5);
  transition: var(--transition);
  background: var(--clr-primary-7);
  border-radius: var(--radius);
  text-align: center;
  @media screen and (max-width: 768px) {
    top: 27%;
    left: 4.5%;
    width: 340px;
    height: 210px;
  }
`;

const ModalExitBtn = styled.button`
  position: absolute;

  top: 1.5rem;
  right: 1.5rem;
  font-size: 40px;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-dark);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    color: var(--clr-red-light);
    transform: scale(1.3);
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    top: 1rem;
    right: 0.5rem;
  }
`;
const ModalText = styled.h3`
  font-size: 50px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export default ModalHidden;
