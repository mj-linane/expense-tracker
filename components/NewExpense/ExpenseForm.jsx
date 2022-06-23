import React, { useState } from 'react';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    
  };

  return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text"
                     onChange={titleChangeHandler}
                     value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input type="number"
                     min={'0.01'}
                     step={'0.01'}
                     onChange={amountChangeHandler}
                     value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type="date"
                     min={'01-01-2020'}
                     max={'12-31-2022'}
                     value={enteredDate}
                     onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
        <style jsx>{`
          button {
            font: inherit;
            cursor: pointer;
            padding: 1rem 2rem;
            border: 1px solid #40005d;
            background-color: #40005d;
            color: white;
            border-radius: 12px;
            margin-right: 1rem;
          }

          button:hover,
          button:active {
            background-color: #510674;
            border-color: #510674;
          }

          button.alternative {
            color: #220131;
            border-color: transparent;
            background-color: transparent;
          }

          button.alternative:hover,
          button.alternative:active {
            background-color: #ddb3f8;
          }

          .new-expense__controls {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 1rem;
            text-align: left;
          }

          .new-expense__control label {
            font-weight: bold;
            margin-bottom: 0.5rem;
            display: block;
          }

          .new-expense__control input {
            font: inherit;
            padding: 0.5rem;
            border-radius: 6px;
            border: 1px solid #ccc;
            width: 20rem;
            max-width: 100%;
          }

          .new-expense__actions {
            text-align: right;
          }
        `}</style>
      </div>
  );
}

export default ExpenseForm;
