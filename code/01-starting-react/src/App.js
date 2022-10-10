import Expenses from "./components/Expenses/Expenses";

/* props
JS에서 같은 함수에 다른 인자로 호출하는 것처럼, React에서는 같은 컴포넌트에 다른 props를 줘서 컴포넌트를 다룰 수 있다.
득징
1. 부모 컴포넌트에서 props key = props value로 자식에게 키와 값을 전달하면, 자식에서는 props로 받아 사용한다.

*/

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 9, 5),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 9, 8) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 9, 13),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 9, 20),
    },
  ];

  return (
    <main>
      <h1>Let's get started!!</h1>
      <Expenses items={expenses}></Expenses>
    </main>
  );
}

export default App;
