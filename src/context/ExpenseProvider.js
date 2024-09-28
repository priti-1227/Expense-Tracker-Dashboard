import React, { createContext, useReducer, useContext } from 'react'

// Create the context
const ExpenseContext = createContext()

// Initial state
const initialState = {
  expenses: JSON.parse(localStorage.getItem('expenses')) || [],

  categories: ['Food', 'Education', 'Entertainment', 'Bills', 'Travel'],
  selectedCategory: '',
}
console.log('localstorage', JSON.parse(localStorage.getItem('expenses')))

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const updatedExpenses = [...state.expenses, action.payload]
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses))
      return { ...state, expenses: updatedExpenses }
    default:
      return state
  }
}

// Provider component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  )
}

// Custom hook for using the context
export const useExpense = () => {
  const context = useContext(ExpenseContext)
  if (!context) {
    throw new Error('useExpense must be used within an ExpenseProvider')
  }
  return context
}

export default ExpenseContext
