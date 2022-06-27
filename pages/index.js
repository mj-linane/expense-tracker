import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Expenses from '../components/Expenses/Expenses';
import NewExpense from '../components/NewExpense/NewExpense';
import { useState } from 'react'
import React from 'react';

const INITIAL_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
export default function Home ()
{
  const [expenses, setExpenses] = useState(INITIAL_DATA);


  const addExpenseHandler = expense =>
  {
    // In setExpenses, previousExpenses is the automatic parameter for the previous state. The previous state is always a parameter when you update the state and it is dependent upon the previous state.
    setExpenses(previousExpenses => [expense, ...previousExpenses]);
  }

  return (
    <div className={ styles.container }>
      <Head>
        <title>Expense App</title>
        <meta name="description"
          content="A simple expense tracker" />
      </Head>

      <main className={ styles.main }>
        <h1 className={ styles.title }>
          Expense Tracker
        </h1>
        <NewExpense onAddExpense={ addExpenseHandler } />
        <Expenses items={ expenses } />
      </main>

      <footer className={ styles.footer }>
        Powered by MJ Linane
      </footer>
    </div>
  )
}
