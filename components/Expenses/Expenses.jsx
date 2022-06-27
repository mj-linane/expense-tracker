import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import React, { useState } from 'react'
import ExpenseList from './ExpenseList'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  // filter expenses by filteredYear
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
