import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import UserInfoForm from './components/UserInfo/UserInfoForm';
import UserList from './components/UserList/UserList';
import shortid from 'shortid';
import Card from './components/UI/Card';

const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  gap: 30px;
  background-color: gray;
`;

function App() {
  const [userInfo, setUserInfo] = useState([
    { username: 'Max', age: 30, id: 1 },
  ]);

  // form에서 추가해서 list를 만들예정
  const addUserInfo = (user) => {
    setUserInfo((prevList) => {
      return [
        ...prevList,
        { username: user.username, age: user.age, id: shortid.generate() },
      ];
    });
  };

  const deleteUserInfo = (infoId) => {
    setUserInfo((prevList) => {
      return prevList.filter((item) => item.id !== infoId);
    });
  };

  return (
    <Main>
      <UserInfoForm addUserInfo={addUserInfo}></UserInfoForm>
      {userInfo.length > 0 ? (
        <UserList
          userInfo={userInfo}
          deleteUserInfo={deleteUserInfo}
        ></UserList>
      ) : (
        <Card>
          <p>유저 정보가 없습니다..!</p>
        </Card>
      )}
    </Main>
  );
}

export default App;
