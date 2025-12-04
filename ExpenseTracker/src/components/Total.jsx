import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function Total() {
  const { state } = useContext(ExpenseContext);

  const total = state.reduce((acc, item) => acc + item.amount, 0);

  return <h2>Total: ₹{total}</h2>;
}
