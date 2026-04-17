import "./App.css";
import ExpenseAddButton from "./components/ExpenseAddButton";
import IncomeAddButton from "./components/IncomeAddButton";
import Difference from "./components/Difference";
import Expenses from "./components/Expenses";
import ExpenseTracker from "./components/ExpenseTracker";
import Incomes from "./components/Incomes";
import IncomeTracker from "./components/IncomeTracker";
import BudgetPieChart from "./components/PieChart";

function App() {
  return (
    <>
      <h1>
        State of the <span id="accent">Wallet</span>
      </h1>
      <div id="dash">
        <div id="trackers">
          <ExpenseTracker />
          <IncomeTracker />
        </div>
        <div id="main-dash">
          <div id="top">
            <Expenses />
            <Incomes />
          </div>
          <div id="bottom">
            <Difference />
          </div>
          <BudgetPieChart />
        </div>

        <div id="buttons">
          <ExpenseAddButton />
          <IncomeAddButton />
        </div>
      </div>
    </>
  );
}

export default App;
