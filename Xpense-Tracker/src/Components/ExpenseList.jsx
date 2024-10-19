import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../slices/expenseSlice"; // Make sure the path is correct

const ExpenseList = ({ expenseList }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Dispatch the deleteExpense action
    dispatch(deleteExpense(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Sr No</th>
            <th className="border border-gray-300 p-2">Transaction</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Amount</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense) => (
            <tr key={expense.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{expense.index}</td>
              <td className="border border-gray-300 p-2">
                {expense.expenseName}
              </td>
              <td className="border border-gray-300 p-2">{expense.category}</td>
              <td className="border border-gray-300 p-2">{expense.amount}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
