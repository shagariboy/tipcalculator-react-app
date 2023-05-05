import React from "react";

export default function BillContainer() {
  return (
    <div className="bill-container">
      <h1>Bill</h1>
      <input
        className="bill-input"
        type="text"
        name="bill"
        placeholder="0.00"
      />
    </div>
  );
}
