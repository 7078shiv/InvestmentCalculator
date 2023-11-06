import React, { useState } from "react";
export default function UserInput({inputData,handelChangeData}) {
 
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial INVESTMENT</label>
          <input
            type="number"
            name="initialInvestment"
            value={inputData.initialInvestment}
            required
            onChange={(e) => handelChangeData("initialInvestment", e.target.value)}
          ></input>
        </p>
        <p>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            name="annualInvestment"
            value={inputData.annualInvestment}
            required
            onChange={(e) => handelChangeData("annualInvestment", e.target.value)}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            name="expectedReturn"
            value={inputData.expectedReturn}
            required
            onChange={(e) => handelChangeData("expectedReturn", e.target.value)}
          ></input>
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            name="duration"
            value={inputData.duration}
            required
            onChange={(e) => handelChangeData("duration", e.target.value)}
          ></input>
        </p>
      </div>
    </form>
  );
}
