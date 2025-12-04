import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ExpenseProvider } from "./context/ExpenseContext";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Total from "./components/Total";
function App() {
   
  return (
    <div>
      <ExpenseProvider>
      <h1>Expense Tracker</h1>
      <AddExpense />
      <Total />
      <ExpenseList />
      </ExpenseProvider>
      </div>
  )
}

export default App
