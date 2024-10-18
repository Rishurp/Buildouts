import { useSelector } from "react-redux";

const ExpenseTable = () => {
  const expenseData = useSelector((state) => state.budget.value);
  const expenses = useSelector((state) => state.expense.value);

  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const calculateCategoryExpense = (category) =>
    expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0);

  const foodExpense = calculateCategoryExpense("food");
  const travelExpense = calculateCategoryExpense("travel");
  const entertainmentExpense = calculateCategoryExpense("entertainment");
  const othersBudget =
    Math.floor(expenseData.budget) -
    (Math.floor(expenseData.food) +
      Math.floor(expenseData.travel) +
      Math.floor(expenseData.entertainment));

  const balanceLeft = Math.floor(expenseData.budget) - totalExpense;

  return (
    <div className="w-full pl-40 py-4">
      <table className="table-auto border border-black">
        <thead>
          <tr>
            <th className="border-r border-black px-2">Category</th>
            <th className="border-r border-black px-2">Limit Status</th>
            <th className="border-r border-black px-2">Budget</th>
            <th className="border-r border-black px-2">Expense</th>
            <th className="px-2">Balance</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border border-black px-2">
            <td className="border-r border-black px-2 py-2">All</td>
            <td className="border-r border-black px-2">
              {balanceLeft > 0 ? (
                <span className="px-2 py-1 bg-green-500 rounded-xl text-white">
                  within
                </span>
              ) : (
                <span className="px-2 py-1 bg-red-500 rounded-xl text-white">
                  exceed
                </span>
              )}
            </td>
            <td className="border-r border-black px-2">
              {expenseData.budget}
            </td>
            <td className="border-r border-black px-2">{totalExpense}</td>
            <td className="border-r border-black px-2">{balanceLeft}</td>
          </tr>
          <tr className="border border-black px-2">
            <td className="border-r border-black px-2 py-2">Food</td>
            <td className="border-r border-black px-2">
              {foodExpense <= expenseData.food ? (
                <span className="px-2 py-1 bg-green-500 rounded-xl text-white">
                  within
                </span>
              ) : (
                <span className="px-2 py-1 bg-red-500 rounded-xl text-white">
                  exceed
                </span>
              )}
            </td>
            <td className="border-r border-black px-2">{expenseData.food}</td>
            <td className="border-r border-black px-2">{foodExpense}</td>
            <td className="border-r border-black px-2">
              {expenseData.food - foodExpense}
            </td>
          </tr>
          {/* Repeat for Travel, Entertainment, and Others */}
          {/* ... */}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
