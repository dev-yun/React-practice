import "./ExpenseItem.css";

// JSX문법 규칙
/*
1. 항상 하나의 루트 요소를 갖는다. (빈 루트요소, 아무 태그로 감싸기, React hook 사용등이 있다.)
2. class 대신 className을 사용한다. (class는 다른 예약어로 사용된다.)
3. {}을 사용해 변수, 상수, 객체, js연산등을 출력할 수 있다.
*/

function ExpenseItem() {
  const expenseDate = new Date(2022, 9, 5);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <section className="expense-item">
      <p>{expenseDate.toLocaleDateString()}</p>
      <article className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <p className="expense-item__price">${expenseAmount}</p>
      </article>
    </section>
  );
}

export default ExpenseItem;
