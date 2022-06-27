import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2 className="expenses-list__fallback">No expenses found.</h2>
        <style jsx>
          {`
            .expenses-list__fallback {
              color: white;
              text-align: center;
            }
          `}
        </style>
      </div>
    )
  }

  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
      <style jsx>
        {`
          .expenses-list {
            list-style: none;
            padding: 0;
          }
        `}
      </style>
    </div>
  )
}

export default ExpenseList
