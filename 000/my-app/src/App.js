import React from 'react';
import { useState } from 'react';

const Form = (props) => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={inputValue} onChange={inputChangeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

const List = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Item key={item.id} id={item.id} onDelete={props.onDelete}>
          {item.content}
        </Item>
      ))}
    </ul>
  );
};

const Item = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li>
      {console.log(props)}
      {props.children}
      <button onClick={deleteHandler}>삭제</button>
    </li>
  );
};

const App = () => {
  const [list, setList] = useState([]);

  const addListHandler = (enteredText) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList.unshift({ content: enteredText, id: Math.random(10) });
      return updatedList;
    });
  };

  const deleteListHandler = (itemId) => {
    setList((prevList) => {
      const updatedList = prevList.filter((item) => item.id !== itemId);
      return updatedList;
    });
  };

  let content = <p>아이템이 없습니다. 추가해주세요.</p>;

  if (list.length > 0) {
    content = <List items={list} onDelete={deleteListHandler} />;
  }

  return (
    <div>
      <Form onAdd={addListHandler} />
      <div>{content}</div>
    </div>
  );
};

export default App;
