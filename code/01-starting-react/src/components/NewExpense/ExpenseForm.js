import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // 기본적으로 입력에 대한 변경 이벤트(event.target.value)는 숫자, date 모두 문자열로 받아오기 때문에 ''로 초기화

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*
  위에서 유사한 state가 3번 사용되었는데, 이를 객체로 변환하여 사용할 수 있다.
  state를 한번에 관리하는 장점이 있지만, 객체 내부의 하나의 state만 변경되어도 모든 state가 변경된다는 점도 존재한다.
  개발자의 취향에 맞게 선택해서 사용하면 될듯..
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /*
    만약 titleChangeHandler라서 setUserInput에서 title만 변경한다면 오류가 발생한다.
    setState는 병합의 개념이 아니라 새로운 값으로 교체하는 개념이라서 enteredAmount, enteredDate에는 undefined값이 들어가게 된다. (spread로 객체를 복사하여 추가하고, 업데이트 값으로 오버라이딩을 해야함)
    
    setUserInput({
      // 수동으로 기존의 값을 추가해야한다.
      ...userInput,
      enteredTitle: event.target.value,
    });
    */

    /*
    하지만 위의 코드도 문제가 발생한다. (상태를 각각 관리하는 것이 아니라 객체로 묶어 관리하고 spread로 펼쳐서 사용하는데, 과거 상태를 사용하는 과정에서 과거의 상태가 최신이 아닐 수 있다.)
    함수를 통해 객체가 최신의 상태임을 확실히하고 진행해야한다.
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    */
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
