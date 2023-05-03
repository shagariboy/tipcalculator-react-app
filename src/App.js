import "./App.css";

import BillContainer from "./Components/BillContainer";
import Header from "./Components/Header";
import TipCalculator from "./Components/TipCalculator/TipCalculator";
import Result from "./Components/Result";


function App() {
  // const billInput = document.querySelector(".bill-input");

  // billInput.value = "0.00";
  // let billValue = 0.0;
  // billInput.addEventListener("input", () => {
  //   billValue = parseFloat(billInput.value);
  // });

  return (
    <div className="main-container">
      <Header />

      <div className="calc-container">
        <div className="partOne">
          <BillContainer />
          <TipCalculator />
        </div>
        <div className="partTwo">
          <Result />
        </div>
      </div>
      

    </div>
  );
}

export default App;

// billInput = { billInput };
