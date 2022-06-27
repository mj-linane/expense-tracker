import React, { useState } from 'react'
import styles from './NewExpense.module.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [showFullForm, setShowFullForm] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }

  const toggleFormHandler = () => {
    setShowFullForm(!showFullForm)
  }

  const renderedForm = showFullForm ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onFormToggle={toggleFormHandler}
    />
  ) : (
    <div className="new-expense__actions">
      <button type="submit" onClick={toggleFormHandler}>
        Add New Expense
      </button>
    </div>
  )

  return <div className={styles['new-expense']}>{renderedForm}</div>
}

export default NewExpense
