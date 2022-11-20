import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import UserInfoForm from './components/UserInfo/UserInfoForm';
import UserList from './components/UserList/UserList';
import shortid from 'shortid';
import Modal from './components/Modal/Modal';

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
      const updateList = [...prevList];

      updateList.unshift({
        username: user.username,
        age: user.age,
        id: shortid.generate(),
      });

      return updateList;
    });
  };

  const deleteUserInfo = (infoId) => {
    setUserInfo((prevList) => {
      const updateList = [...prevList];

      return updateList.filter((item) => item.id !== infoId);
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
        <p>유저 정보가 없습니다..!</p>
      )}
      <Modal></Modal>
    </Main>
  );
}

export default App;
