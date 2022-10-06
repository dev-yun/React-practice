import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// JSX문법 규칙
/*
1. 항상 하나의 루트 요소를 갖는다. (빈 루트요소, 아무 태그로 감싸기, React hook 사용등이 있다.)
2. class 대신 className을 사용한다. (class는 다른 예약어로 사용된다.)
3. {}을 사용해 변수, 상수, 객체, js연산등을 출력할 수 있다.
4. 함수나 메서드에서 {}을 사용하면 안된다. ()으로 대체
5. 만약 더 자식 컴포넌트가 없다면(최하위 컴포넌트라면) self-closing 구문으로 작성해도 된다. (<component />)
*/

function ExpenseItem({ title, amount, date }) {
  return (
    <article className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${amount}</p>
      </div>
    </article>
  );
}

export default ExpenseItem;
