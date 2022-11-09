import React from 'react';
import Card from '../UI/Card';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  /**ExpenseList를 분리한 이유 => 기존에 Expenses Component에서 ExpenseItem은 JSX에서 일부분이였다.
   * 그래서 조건에 따른 모든 return의 변경(아래 코드)을 할 수 없었는데, ExpenseItem만을 하나의 component로 나눠서 그러한 작업이 가능해졌다. (0일때 A 리턴, 아닐때 B 리턴)
   * 즉, 조건에 따른 다른 JSX 코드를 반환하는 것이 가능해짐(깔끔)
   */

  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">Can not found Expenses !</h2>
    );
  }

  return (
    <Card as="ul" className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default ExpensesList;
