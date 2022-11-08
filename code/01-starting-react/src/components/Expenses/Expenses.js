import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /* 지금까지 코드의 문제점 => 1,2,3,4의 expenses 객체가 존재하는데 새로운 expense 객체를 추가하면 
     새로운 객체, 1, 2, 3, 4로 업데이트 되고, 각자의 내용이 하나씩 변경됨.
     즉, 불필요한 리렌더링까지 발생하여 성능이슈와 예기치 못한 버그 발생 가능
     => 리액트가 새로 추가되는 객체를 어디에 추가해야하는지 모르기 때문에 발생 => key를 추가하여 해결 

     key props는 어떤 컴포넌트에서도 추가할 수 있고 key를 추가하면 React는 개별 컴포넌트를 인식하게 된다.
     key는 유니크해야함 */

  const filteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card as="section" className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
