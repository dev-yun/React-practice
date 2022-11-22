import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Button } from './Button';
import Card from './Card';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalWrapper = styled(Card)`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50vh;
  z-index: 100;

  overflow: hidden;
  background-color: #7a1db0;
`;

const ModalHeader = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: bold;

  padding: 20px;
`;

const ModalBody = styled.div`
  position: relative;
  height: 150px;
  padding: 30px 20px;

  background-color: white;
`;

const ModalMessage = styled.p`
  font-size: 24px;
`;

const ModalButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 20px;

  width: 80px;
`;

function ModalLayout(props) {
  return (
    <>
      <Backdrop onClick={props.handlerModalPage} />
      <ModalWrapper>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>
          <ModalMessage>{props.message}</ModalMessage>
          <ModalButton onClick={props.handlerModalPage}>Okay</ModalButton>
        </ModalBody>
      </ModalWrapper>
    </>
  );
}

// ModalLayout을 Backdrop과 ModalLayout 두개로 나누고 createPortal을 두번 추가할수도 있다.
function Modal(props) {
  return (
    <>
      {createPortal(
        <ModalLayout
          title={props.title}
          message={props.message}
          handlerModalPage={props.handlerModalPage}
        />,
        document.querySelector('#modal')
      )}
    </>
  );
}

export default Modal;
