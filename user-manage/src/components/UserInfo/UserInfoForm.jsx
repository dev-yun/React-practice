import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../UI/Button';

const UserForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 600px;
  padding: 20px;
  gap: 10px;
  background-color: white;

  border-radius: 20px;

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

  const handlerNameChange = (e) => {
    setName(e.target.value);
  };

  const handlerAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handlerSubmitInfo = (e) => {
    e.preventDefault();
    props.addUserInfo({ username: name, age: age });

    setName('');
    setAge('');
  };

  return (
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
  );
}

export default UserInfoForm;
