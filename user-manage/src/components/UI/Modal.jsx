import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  top: 40vh;
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

function Modal(props) {
  return (
    <Wrapper>
      <Backdrop />
      <ModalWrapper>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>
          <ModalMessage>{props.message}</ModalMessage>
          <ModalButton onClick={props.handlerModalPage}>Okay</ModalButton>
        </ModalBody>
      </ModalWrapper>
    </Wrapper>
  );
}

export default Modal;
