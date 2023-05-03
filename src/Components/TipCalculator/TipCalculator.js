import { Component } from "react";
import "./TipCalculator.css";
import anime from "animejs/lib/anime.es.js";

class TipCalculator extends Component {
  componentDidMount() {
    const input = document.getElementById("tip");

    input.addEventListener("focus", () => {
      anime({
        targets: input,
        scale: [
          { value: 1.1, duration: 300 },
          { value: 1, duration: 300 },
        ],
        easing: "easeInOutQuad",
      });
    });
  }
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
