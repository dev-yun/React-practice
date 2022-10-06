import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expense({ items }) {
  return (
    <section className="expenses">
      {items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </section>
  );
}

export default Expense;
