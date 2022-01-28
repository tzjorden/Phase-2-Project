

import React, { useState } from "react";

 function Login() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [numMonths, setNumMonth] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    const formValid =
      +loanAmount >= 0 &&
      0 <= +interestRate &&
      +interestRate <= 100 &&
      +numMonths > 0;
    if (!formValid) {
      return;
    }
    setMonthlyPayment((+loanAmount * (1 + +interestRate / 100)) / +numMonths);
    
  };
  return (
    <div className="App" id="div-form">
      <form onSubmit={calculate} id="calculator">
        <div>
          <label className="Calc-text">Loan amount: </label>
          <input
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Dollar Amount"
            className="Calc-input"
          />
        </div>
        <div>
          <label className="Calc-text">Interest rate: </label>
          <input
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Percentage"
            className="Calc-input"
          />
        </div>
        <div id="loan-term">
          <label className="Calc-text">Loan term: </label>
          <input
            value={numMonths}
            onChange={(e) => setNumMonth(e.target.value)}
            placeholder="Months"
            className="Calc-input"
          />
        </div>
        <button type="submit" className="buttons1">Calculate monthly payment</button>
      </form>
      <p className="Calc-text" >Monthly payment: {monthlyPayment.toFixed(2)}</p>
    </div>
  );
}

export default Login;