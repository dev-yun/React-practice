import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card as="section" className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={filterChangeHandler}
      ></ExpensesFilter>
      <Card as="ul" className="expenses">
        {items.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        ))}
      </Card>
    </Card>
  );
}

export default Expenses;
