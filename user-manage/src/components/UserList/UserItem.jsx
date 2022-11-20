import React from 'react';
import styled from 'styled-components';
import { Button } from '../UI/Button';

const UserItemStyle = styled.li`
  border: 1px solid black;
  background-color: white;

  padding: 10px 10px;
  font-size: 24px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled(Button)`
  width: 60px;
`;

function UserItem(props) {
  const handlerDeleteItem = () => {
    props.deleteUserInfo(props.id);
  };

  return (
    <UserItemStyle>
      {props.username} ({props.age} years old)
      <DeleteButton onClick={handlerDeleteItem}>삭제</DeleteButton>
    </UserItemStyle>
  );
}

export default UserItem;
