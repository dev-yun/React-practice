import React from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';

const UserListStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  width: 600px;
  padding: 20px;

  border-radius: 15px;
  background-color: white;
`;

function UserList(props) {
  return (
    <UserListStyle>
      {console.log(props)}
      {props.userInfo.map((item) => (
        <UserItem
          username={item.username}
          age={item.age}
          key={item.id}
          id={item.id}
          deleteUserInfo={props.deleteUserInfo}
        ></UserItem>
      ))}
    </UserListStyle>
  );
}

export default UserList;
