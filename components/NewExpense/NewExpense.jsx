import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

      <style jsx>{`
        .new-expense {
          background-color: #a892ee;
          padding: 1rem;
          margin: 2rem auto;
          width: 50rem;
          max-width: 95%;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  )
}

export default NewExpense
