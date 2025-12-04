import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function AddExpense() {
  const { dispatch } = useContext(ExpenseContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      id: crypto.randomUUID(),
      text,
      amount: Number(amount),
    };

    dispatch({ type: "ADD_EXPENSE", payload: newExpense });

    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Expense Title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}
