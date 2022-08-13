// state(상태)를 사용하면 React와 {useState}를 호출해야함
// 상태가 변할때마다 re rendering 된다.
import React,{useState} from 'react';
import OddEvenResult from './OddEvenResult';

// 부모 컴퍼넌트(App)에서 전달한 initialValue를 받아 사용하려면 매개변수로 받아와 사용해야한다.
// 이때 부모 컴퍼넌트에서 전달받은 값을 객채 형식이고 매개변수.전달받은값이름 형식으로 사용 가능
const Counter = ({initialValue}) =>{
  // 0번째 인덱스는 상태의 값으로 사용
  // 1번째 인덱스는 상태를 변경시키는 상태변화함수로써 작동
  // useState에 사용한 (0)은 초기값을 의미 (count에 들어감)
  const [count, setCount ] = useState(initialValue);

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
      <OddEvenResult count={count} />
    </div>
  )
}

Counter.defaultProps = {
  initialValue:0,
}

export default Counter;