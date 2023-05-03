import { Component } from "react";
import "./TipCalculator.css";

class TipCalculator extends Component {
  render() {
    return (
      <div className="tip-calculator">
        <div className="label-wrapper">
          <label htmlFor="tip">Select Tip %</label>
        </div>
        <div className="btn-wrapper">
          <div className="btn tip">5%</div>
          <div className="btn tip">10%</div>
          <div className="btn tip btn-active">15%</div>
          <div className="btn tip">25%</div>
          <div className="btn tip">50%</div>
          <input
            className="input-text"
            type="text"
            name="tip"
            id="tip"
            placeholder="Custom"
          />
        </div>
        <div className="people-container">
          <div className="label-wrapper">
            <label htmlFor="people">Number of People</label>
            <div className="error-note">Can't be zero</div>
          </div>
          <input
            className="people-input"
            type="text"
            name="people"
            id="people"
            placeholder="1"
          />
        </div>
      </div>
    );
  }
}

export default TipCalculator;
