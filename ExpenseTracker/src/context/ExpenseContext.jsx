import { createContext, useReducer } from "react";
import { expenseReducer } from "./ExpenseReducer.jsx";
import { useEffect } from "react";
export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  let initialState = [];
  const Expenselist = localStorage.getItem("expenses");
  if(Expenselist){
    initialState = JSON.parse(Expenselist);
  }
  else{
    initialState = [];
  }
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  useEffect(()=>{
  localStorage.setItem("expenses",JSON.stringify(state));
  },[state])
  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};
