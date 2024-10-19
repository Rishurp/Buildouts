import { useSelector } from "react-redux";

const ExpenseTable = () => {
  const expenseData = useSelector((state) => state.budget.value);
  const expenses = useSelector((state) => state.expense.value);

  // Total of all expenses
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  // Calculate total expenses for a specific category
  const calculateCategoryExpense = (category) =>
    expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0);

  // Individual category expenses
  const foodExpense = calculateCategoryExpense("food");
  const travelExpense = calculateCategoryExpense("travel");
  const entertainmentExpense = calculateCategoryExpense("entertainment");
  const othersExpense = calculateCategoryExpense("others");

  // Calculate remaining balance for each category
  const calculateBalance = (budget, expense) => budget - expense;

  // Calculate overall balance left
  const balanceLeft = calculateBalance(expenseData.budget, totalExpense);

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
          {/* Overall Budget Row */}
          <tr className="border border-black px-2">
            <td className="border-r border-black px-2 py-2">All</td>
            <td className="border-r border-black px-2">
              {balanceLeft >= 0 ? (
                <span className="px-2 py-1 bg-green-500 rounded-xl text-white">
                  within
                </span>
              ) : (
                <span className="px-2 py-1 bg-red-500 rounded-xl text-white">
                  exceed
                </span>
              )}
            </td>
            <td className="border-r border-black px-2">{expenseData.budget}</td>
            <td className="border-r border-black px-2">{totalExpense}</td>
            <td className="border-r border-black px-2">{balanceLeft}</td>
          </tr>

          {/* Food Category Row */}
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
              {calculateBalance(expenseData.food, foodExpense)}
            </td>
          </tr>

          {/* Travel Category Row */}
          <tr className="border border-black px-2">
            <td className="border-r border-black px-2 py-2">Travel</td>
            <td className="border-r border-black px-2">
              {travelExpense <= expenseData.travel ? (
                <span className="px-2 py-1 bg-green-500 rounded-xl text-white">
                  within
                </span>
              ) : (
                <span className="px-2 py-1 bg-red-500 rounded-xl text-white">
                  exceed
                </span>
              )}
            </td>
            <td className="border-r border-black px-2">{expenseData.travel}</td>
            <td className="border-r border-black px-2">{travelExpense}</td>
            <td className="border-r border-black px-2">
              {calculateBalance(expenseData.travel, travelExpense)}
            </td>
          </tr>

          {/* Entertainment Category Row */}
          <tr className="border border-black px-2">
            <td className="border-r border-black px-2 py-2">Entertainment</td>
            <td className="border-r border-black px-2">
              {entertainmentExpense <= expenseData.entertainment ? (
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
              {expenseData.entertainment}
            </td>
            <td className="border-r border-black px-2">
              {entertainmentExpense}
            </td>
            <td className="border-r border-black px-2">
              {calculateBalance(expenseData.entertainment, entertainmentExpense)}
            </td>
          </tr>

          {/* Others Category Row */}
          <tr className="border border-black px-2">
            <td className="border-r border-black px-2 py-2">Others</td>
            <td className="border-r border-black px-2">
              {othersExpense <= expenseData.others ? (
                <span className="px-2 py-1 bg-green-500 rounded-xl text-white">
                  within
                </span>
              ) : (
                <span className="px-2 py-1 bg-red-500 rounded-xl text-white">
                  exceed
                </span>
              )}
            </td>
            <td className="border-r border-black px-2">{expenseData.others}</td>
            <td className="border-r border-black px-2">{othersExpense}</td>
            <td className="border-r border-black px-2">
              {calculateBalance(expenseData.others, othersExpense)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
