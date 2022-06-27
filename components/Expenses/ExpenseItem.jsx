import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  console.log('ExpenseItem evaluated by React')

  const clickHandler = () => {
    setTitle('updated')
    console.log(title)
  }

  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Edit Name</button>
    </Card>
  )
}

export default ExpenseItem
