import React from 'react';
import styled from 'styled-components';
import { Button } from '../UI/Button';
import Card from '../UI/Card';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(255, 255, 255, 0.1);
`;

const ModalWrapper = styled(Card)`
  position: relative;
  overflow: hidden;

  background-color: #7a1db0;
`;

const ModalHeader = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: bold;

  padding: 20px;
`;

const ModalContent = styled.p`
  position: relative;
  height: 150px;
  padding: 30px 20px;

  font-size: 24px;
  background-color: white;
`;

const ModalButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 20px;

  width: 80px;
`;

function Modal() {
  return (
    <Wrapper>
      <ModalWrapper>
        <ModalHeader>header</ModalHeader>
        <ModalContent>
          Please
          <ModalButton>Okay</ModalButton>
        </ModalContent>
      </ModalWrapper>
    </Wrapper>
  );
}

export default Modal;
