import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';

const UserForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 10px;

  & label {
    font-weight: bold;
    font-size: 20px;
  }
`;

const UserInput = styled.input`
  width: 100%;
  padding: 2px 5px;
  font-size: 20px;

  box-sizing: border-box;
`;

const SubmitButton = styled(Button)`
  width: 120px;
  margin-top: 10px;
`;

function UserInfoForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [isError, setIsError] = useState(false);

  const handlerNameChange = (e) => {
    setName(e.target.value);
  };

  const handlerAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handlerSubmitInfo = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setErrorTitle('빈 값 입력');
      setErrorMessage(
        '이름이나 나이에는 빈 값 또는 공백이 입력될 수 없습니다.'
      );
      setIsError(true);
      return;
    }

    if (+age < 0) {
      setErrorTitle('음수 입력');
      setErrorMessage('나이에는 음수가 입력될 수 없습니다.');
      setIsError(true);
      return;
    }

    props.addUserInfo({ username: name, age: age });

    setName('');
    setAge('');
  };

  const handlerModalPage = () => {
    setIsError(false);
  };

  return (
    <>
      {isError && (
        <Modal
          title={errorTitle}
          message={errorMessage}
          handlerModalPage={handlerModalPage}
        />
      )}
      <Card>
        <UserForm onSubmit={handlerSubmitInfo}>
          <label htmlFor="username">Username</label>
          <UserInput
            type="text"
            id="username"
            value={name}
            onChange={handlerNameChange}
          />
          <label htmlFor="userAge">Age(Years)</label>
          <UserInput
            type="number"
            id="userAge"
            value={age}
            onChange={handlerAgeChange}
          />
          <SubmitButton>Add User</SubmitButton>
        </UserForm>
      </Card>
    </>
  );
}

export default UserInfoForm;
