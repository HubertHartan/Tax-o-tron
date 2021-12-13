import React, { useState } from 'react';

import './style.css';

import CalculatorPage from './pages/CalculatorPage';
import ResultPage from './pages/ResultPage';

const App = () => {
  const [income, setIncome] = useState(0.0);
  const [tax, setTax] = useState(0.0);
  const [bool, setBool] = useState(false);

  const goBack = () => {
    setIncome(0.0);
    setTax(0.0);
    setBool(false);
  };

  const handleAmount = (event) => {
    const value = event.target.value;
    setIncome(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (income < 18201) {
      setTax(0.0);
    } else if (income < 45001) {
      setTax((income - 18200) * 0.19);
    } else if (income < 120001) {
      setTax((income - 45000) * 0.325 + 5092);
    } else if (income < 180001) {
      setTax((income - 120000) * 0.37 + 29467);
    } else {
      setTax((income - 180000) * 0.45 + 51667);
    }

    setBool(true);
  };

  if (bool == false) {
    return (
      <>
        <CalculatorPage
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
      </>
    );
  } else {
    return (
      <>
        <ResultPage income={income} goBack={goBack} tax={tax} />
      </>
    );
  }
};

export default App;
