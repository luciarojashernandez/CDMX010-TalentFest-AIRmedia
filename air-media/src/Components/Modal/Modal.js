import React from "react";
import { ModalContainer } from "./ModalElements";

const Modal = ({ showModal, setShowModal }) => {
  return <>{showModal ? <ModalContainer>MODAL</ModalContainer> : null}</>;
};

export default Modal;
