export const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];

    case "DELETE_EXPENSE":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};