import React from 'react';
import MortgageCalculator from './components/MortgageCalculator';

const App = () => {
  return (
    <div className='container m-auto px-4 py-8 text-gray-800 lg:px-24 md:px-8 md:py-24'>
      <h1 className='px-4 text-left text-3xl font-semibold'>
        Mortgage Calculator
      </h1>
      <MortgageCalculator />
    </div>
  );
};

export default App;
