import { useEffect, useState } from "react";
import { addBudget } from "../slices/budgetSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BudgetForm = () => {
  const expenseData = useSelector((state) => state.budget.value);
  const [formData, setFormData] = useState({
    name: "",
    budget: 0,
    food: 0,
    travel: 0,
    entertainment: 0,
  });

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleForm = (event) => {
    const { id, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    setFormData({
      name: expenseData.name,
      budget: expenseData.budget,
      food: expenseData.food,
      travel: expenseData.travel,
      entertainment: expenseData.entertainment,
    });
  }, []);

  return (
    <div className="bg-white py-4 mt-4 mx-24 flex flex-col items-center h-full">
      <p className="mb-4">Welcome to your own Expense Tracker</p>
      <p className="mb-4">Please fill in the below form to start tracking</p>
      <div className="mt-8 p-4 border border-neutral-400">
        <div className=" flex flex-col items-start">
          <div>
            <label htmlFor="name">Enter your name : </label>
            <input
              className="mx-4 border-2 px-2 py-1 border-neutral-400"
              id="name"
              type="text"
              onChange={handleForm}
              value={formData.name}
            />
          </div>

          <div className=" my-4">
            <label htmlFor="budget">Enter your monthly budget : </label>
            <input
              className="mx-4 border-2 px-2 py-1 border-neutral-400"
              id="budget"
              type="number"
              min="0"
              value={formData.budget}
              onChange={handleForm}
            />
          </div>

          <p>Fill your monthly categorical budget: </p>

          <table className=" table-auto border-2 border-black ">
            <thead>
              <tr>
                <th className="border-2 border-black ">Food</th>
                <th className="border-2 border-black  ">Travel</th>
                <th className="border-2 border-black  ">Entertainment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="border-2 px-2 py-2 border-black  ">
                  <input
                    id="food"
                    className="border-2 px-2 border-neutral-600"
                    type="number"
                    min="0"
                    value={formData.food}
                    onChange={handleForm}
                  />
                </td>
                <td className="border-2 px-2 py-2 border-black">
                  <input
                    className="border-2 px-2 border-neutral-600"
                    id="travel"
                    type="number"
                    min="0"
                    value={formData.travel}
                    onChange={handleForm}
                  />
                </td>
                <td className="border-2 px-2 py-2 border-black">
                  <input
                    id="entertainment"
                    className="border-2 px-2 border-neutral-600"
                    type="number"
                    min="0"
                    value={formData.entertainment}
                    onChange={handleForm}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={() => {
            dispatch(addBudget(formData));
            navigateTo("/tracker");
          }}
          className="mt-4 bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-700 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
