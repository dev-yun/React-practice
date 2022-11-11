// import { useState } from 'react';

// const App = () => {
//   const [isValid, setIsValid] = useState(false);

//   // 클릭하면 isValid를 변경하는 함수
//   const isValidHandler = () => {
//     isValid ? setIsValid(false) : setIsValid(true);
//   };

//   return (
//     <>
//       <button onClick={isValidHandler}>Click!</button>
//       <div
//         style={{
//           width: '100px',
//           height: '100px',
//           backgroundColor: isValid ? 'tomato' : 'teal',
//         }}
//       ></div>
//     </>
//   );
// };

// export default App;
import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [isValid, setIsValid] = useState(true);

  // 클릭하면 isValid를 변경하는 함수
  const isValidHandler = () => {
    isValid ? setIsValid(false) : setIsValid(true);
  };

  return (
    <>
      <button onClick={isValidHandler}>Click!</button>
      <div className={`${styles.box} ${!isValid && styles.color}`}></div>
    </>
  );
};

export default App;
