import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Expenses from '../components/Expenses/Expenses';
import NewExpense from '../components/NewExpense/NewExpense';

export default function Home ()
{
  const expenses = [
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

  const addExpenseHandler = expense =>
  {
    console.log("On home page")
    console.log(expense)
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
