import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../slices/expenseSlice";
import { useSelector } from "react-redux";

const NewExpenseForm = () => {
  const [formData, setFormData] = useState({
    expenseName: "",
    category: "select",
    amount: 0,
  });

  const data = useSelector((state) => state.expense.value);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: id === "amount" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.category === "select") {
      alert("Please select a valid category");
      return;
    }

    dispatch(addExpense(formData));

    setFormData({
      expenseName: "",
      category: "select",
      amount: 0,
    });
  };

  console.log(data);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">New Expense Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="expenseName" className="block mb-1">
            Expense Name:{" "}
          </label>
          <input
            id="expenseName"
            type="text"
            value={formData.expenseName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block mb-1">
            Select Category:
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          >
            <option value="select">Select</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="entertainment">Entertainment</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-1">
            Expense Amount:
          </label>
          <input
            type="number"
            id="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-slate-600 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewExpenseForm;
