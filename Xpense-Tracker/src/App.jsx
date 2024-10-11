import BudgetForm from "./Components/BudgetForm";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseTracker from "./Components/ExpenseTracker";
function App() {
  return (
    <div className="h-full ">
      <p className="text-2xl mt-4">xTracker</p>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<BudgetForm />} />
          <Route path="/tracker" element={<ExpenseTracker />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
