import React, { useState } from 'react'
import styles from './ExpenseForm.module.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const cancelButtonHandler = (event) => {
    props.onFormToggle()
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData)
    {
      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
    }

    props.onFormToggle()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={styles['new-expense__controls']}>
          <div className={styles['new-expense__control']}>
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className={styles['new-expense__control']}>
            <label>Amount</label>
            <input
              type="number"
              min={'0.01'}
              step={'0.01'}
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className={styles['new-expense__control']}>
            <label>Date</label>
            <input
              type="date"
              min={'01-01-2020'}
              max={'12-31-2022'}
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={styles['new-expense__actions']}>
          <button type="button" onClick={cancelButtonHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
