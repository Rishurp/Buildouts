import React, { useState } from "react";

const NewExpenseForm = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    expenseName: "",
    category: "select",
    amount: 0,
  });

  // Handle change in input fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Convert the amount to a number if the field is "amount"
    setFormData((prevState) => ({
      ...prevState,
      [id]: id === "amount" ? parseFloat(value) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (formData.category === "select") {
      alert("Please select a valid category");
      return;
    }

    // Handle form data (e.g., send to API or log)
    console.log("Form Data Submitted: ", formData);
    
    // Optionally reset the form after submission
    setFormData({
      expenseName: "",
      category: "select",
      amount: 0,
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">New Expense Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="expenseName" className="block mb-1">Expense Name: </label>
          <input
            id="expenseName"
            type="text"
            value={formData.expenseName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block mb-1">Select Category:</label>
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
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block mb-1">Expense Amount:</label>
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
