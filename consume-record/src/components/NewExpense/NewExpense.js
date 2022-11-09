import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const editingHandler = () => {
    setIsEditing(!isEditing);
  };

  let newExpenseContent = (
    <button onClick={editingHandler}>Add New Expense</button>
  );
  if (isEditing) {
    newExpenseContent = (
      <ExpenseForm
        onCancel={editingHandler}
        onSaveExpenseData={onSaveExpenseDataHandler}
      />
    );
  }

  return (
    <Card as="section" className="new-expense">
      {newExpenseContent}
    </Card>
  );
};

export default NewExpense;
