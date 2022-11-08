import './ExpenseDate.css';

function ExpenseDate({ date }) {
  const month = date.toLocaleString('ko-KR', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('ko-KR', { day: '2-digit' });
  return (
    <>
      <div className="expense-date">
        <p className="expense-date__year">{year}</p>
        <p className="expense-date__month">{month}</p>
        <p className="expense-date__day">{day}</p>
      </div>
    </>
  );
}

export default ExpenseDate;
