import React from "react";

export default function Result() {
  return (
    <div className="result">
      <div className="figures">
        <div className="tip-amount">
          <div className="text">
            <p>Tip Amount</p>
            <div className="person">/ person</div>
          </div>
          <div className="amount" id="tip-amount">
            $4.27
          </div>
        </div>
        <div className="total">
          <div className="text">
            <p>Total</p>
            <div className="person">/ person</div>
          </div>
          <div className="amount" id="total-amount">
            $32.79
          </div>
        </div>
      </div>

      <button className="reset-btn">RESET</button>
    </div>
  );
}
