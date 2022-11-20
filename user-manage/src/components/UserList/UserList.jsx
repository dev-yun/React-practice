import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';
import UserItem from './UserItem';

const UserListStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

function UserList(props) {
  return (
    <Card>
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
    </Card>
  );
}

export default UserList;
