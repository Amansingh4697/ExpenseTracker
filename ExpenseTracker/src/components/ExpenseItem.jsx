import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function ExpenseItem({ exp }) {
  const { dispatch } = useContext(ExpenseContext);

  return (
    <div>
      <span>{exp.text} — ₹{exp.amount}</span>
      <button onClick={() => dispatch({ type: "DELETE_EXPENSE", payload: exp.id })}>
        Delete
      </button>
    </div>
  );
}
