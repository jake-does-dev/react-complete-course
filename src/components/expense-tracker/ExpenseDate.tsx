import './ExpenseItem.css';

type ExpenseDateProps = {
  date: Date;
};

function ExpenseDate(props: ExpenseDateProps) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-UK', { month: 'long' });
  const day = props.date.toLocaleString('en-UK', { day: '2-digit' });

  return (
    <div className={'expense-date'}>
      <div className={'expense-date__day'}>{day}</div>
      <div className={'expense-date__month'}>{month}</div>
      <div className={'expense-date__year'}>{year}</div>
    </div>
  );
}

export default ExpenseDate;
