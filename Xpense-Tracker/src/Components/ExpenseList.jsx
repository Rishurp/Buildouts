import { useSelector } from "react-redux";

const ExpenseList = () => {
  const expenseList = useSelector((state) => state.expense.value);
  // const expenses = [
  //   { id: 1, transaction: "Movie", category: "Entertainment", amount: "Rs 800" },
  //   { id: 2, transaction: "Goa Tickets", category: "Travel", amount: "Rs 2500" },
  //   { id: 3, transaction: "New Jacket", category: "Others", amount: "Rs 2500" },
  //   { id: 4, transaction: "Cricket Bat", category: "Entertainment", amount: "Rs 3000" },
  //   { id: 5, transaction: "Saturday Dinner", category: "Food", amount: "Rs 540" },
  //   { id: 6, transaction: "Cab To Office", category: "Travel", amount: "Rs 200" },
  //   { id: 7, transaction: "Chhole Bhatoore", category: "Food", amount: "Rs 150" },
  // ];

  const handleDelete = (id) => {
    // Logic for deleting an expense (to be implemented)
    console.log(`Deleting expense with ID: ${id}`);
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
              <td className="border border-gray-300 p-2">{expense.id}</td>
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
