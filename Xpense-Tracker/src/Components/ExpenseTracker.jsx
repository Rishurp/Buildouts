import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpenseTable from "./ExpenseTable";
import NewExpenseForm from "./NewExpenseForm";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter";

const ExpenseTracker = () => {
  const expenseData = useSelector((state) => state.budget.value);
  const navigateTo = useNavigate();

  console.log(expenseData.name);
  return (
    <div className="bg-white py-4 mt-4 mx-24 flex flex-col items-center h-full">
      <div className="flex w-full justify-around border-b pb-8 ">
        <p className="text-xl font-bold ">
          {expenseData.name} &#39;s Monthly Expenditure
        </p>
        <button
          onClick={() => navigateTo("/")}
          className="px-2 text-white rounded-md  bg-slate-500"
        >
          New/Update Tracker
        </button>
      </div>
      <div className=" border-b w-full pl-40 py-4">
        <ExpenseTable />
      </div>
      <div className="border-b">
        <NewExpenseForm />
      </div>
      <div>
        <Filter/>
      </div>
      <div>
        <ExpenseList />
      </div>
    </div>
  );
};

export default ExpenseTracker;
