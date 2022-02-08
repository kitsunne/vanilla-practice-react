import React, { useState } from "react";
import ModalHidden from "./ModalHidden";
import styled from "styled-components";

const Modal = () => {
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
const ModalWrapper = styled.div`
  margin: 150px auto;
  width: 95vw;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin: 180px auto;
    width: 85vw;
    margin-bottom: 280px;
  }
`;

const ModalBanner = styled.div`
  display: block;
  place-items: center;
  background: var(--clr-white);
  padding: 120px 0;
  width: 650px;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  text-align: center;
  h1 {
    font-size: 30px;
    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 350px;
    padding: 20px 0;
  }
`;
const ModalOpenBtn = styled.button`
  text-transform: uppercase;
  background: transparent;
  color: var(--clr-black);
  padding: 10px 15px;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  font-size: 15px;
  margin: 20px auto;
  border: 2px solid var(--clr-primary-5);
  cursor: pointer;
  border-radius: var(--radius);
  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 7px 10px;
  }
`;

export default Modal;
