import ExpenseForm from "./Components/ExpenseForm";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="h-[100vh] overflow-y-hidden">
      <Provider store={store}>
        <p className="text-2xl mt-4">xTracker</p>
        <ExpenseForm />
      </Provider>
    </div>
  );
}

export default App;
