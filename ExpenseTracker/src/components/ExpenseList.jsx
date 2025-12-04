import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { state } = useContext(ExpenseContext);

  return (
    <div>
      <h2>All Expenses</h2>
      {state.map((exp) => (
        <ExpenseItem key={exp.id} exp={exp} />
      ))}
    </div>
  );
}
