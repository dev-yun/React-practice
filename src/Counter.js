// state(상태)를 사용하면 React와 {useState}를 호출해야함
// 상태가 변할때마다 re rendering 된다.
import React,{useState} from 'react';

const Counter = () =>{

  // 0에서 +1 -1 씩 상태가 변화하는 코드

  // 0번째 인덱스는 상태의 값으로 사용
  // 1번째 인덱스는 상태를 변경시키는 상태변화함수로써 작동
  // useState에 사용한 (0)은 초기값을 의미 (count에 들어감)
  const [count, setCount ] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  }
  const onDecrease = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default Counter;