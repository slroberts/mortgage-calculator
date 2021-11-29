import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import PaymentSummary from './PaymentSummary';

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(15);
  const [interestRate, setInterestRate] = useState(2.5);
  const [paymentSummary, setPaymentSummary] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const principal = purchasePrice - downPayment;
  const rate = interestRate / 100 / 12;
  const numberOfPayments = repaymentTime * 12;

  const paymentPerMonth = () => {
    const perMonth =
      principal *
      ((rate * Math.pow(1 + rate, numberOfPayments)) /
        (Math.pow(1 + rate, numberOfPayments) - 1));

    return perMonth.toFixed(2);
  };

  const monthlyPayment = paymentPerMonth();
  const biweeklyPayment = (monthlyPayment / 2).toFixed(2);
  const downPaymentPercent = Math.round((downPayment / purchasePrice) * 100);
  const totalMortgageCost = (monthlyPayment * numberOfPayments).toFixed(2);
  const totalInterestPaid = (totalMortgageCost - principal).toFixed(2);

  const handleChange = (e, setValue) => {
    setValue(e.target.value);

    if (principal > 0) {
      setButtonDisabled(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPaymentSummary(true);
  };

  return (
    <div>
      <form
        className='flex flex-wrap justify-between'
        onSubmit={handleFormSubmit}
      >
        <div className='w-full my-4 px-4 lg:w-2/6 md:w-3/6 md:my-8'>
          <div>
            Purchase price:
            <span className='text-lg font-bold'>
              <NumberFormat
                prefix={' $'}
                value={purchasePrice}
                displayType={'text'}
                thousandSeparator={true}
              />
            </span>
          </div>
          <input
            className='w-full'
            name='purchasePrice'
            defaultValue={purchasePrice}
            onChange={(e) => handleChange(e, setPurchasePrice)}
            type='range'
            min='0'
            max='1000000'
            step='100'
          />
        </div>
        <div className='w-full my-4 px-4 lg:w-2/6 md:w-3/6 md:my-8'>
          <div>
            Down payment:
            <span className='text-lg font-bold'>
              <NumberFormat
                prefix={' $'}
                value={downPayment}
                displayType={'text'}
                thousandSeparator={true}
              />
            </span>
          </div>
          <input
            className='w-full'
            name='downPayment'
            defaultValue={downPayment}
            onChange={(e) => handleChange(e, setDownPayment)}
            type='range'
            min='0'
            max='1000000'
            step='100'
          />
        </div>
        <div className='w-full my-4 px-4 lg:w-2/6 md:w-3/6 md:my-8'>
          <div>
            Repayment time:{' '}
            <span className='text-lg font-bold'>
              <NumberFormat
                suffix={repaymentTime > 1 ? ' years' : ' year'}
                value={repaymentTime}
                displayType={'text'}
                thousandSeparator={false}
              />
            </span>
          </div>
          <input
            className='w-full'
            name='repaymentTime'
            defaultValue={repaymentTime}
            onChange={(e) => handleChange(e, setRepaymentTime)}
            type='range'
            min='5'
            max='30'
            step='5'
          />
        </div>
        <div className='w-full my-4 px-4 lg:w-2/6 md:w-3/6 md:my-8'>
          <div>
            Interest rate:{' '}
            <span className='text-lg font-bold'>
              <NumberFormat
                suffix={'%'}
                value={interestRate}
                displayType={'text'}
                thousandSeparator={true}
              />
            </span>
          </div>
          <input
            className='w-full'
            name='interestRate'
            defaultValue={interestRate}
            onChange={(e) => handleChange(e, setInterestRate)}
            type='range'
            min='1'
            max='15'
            step='.1'
          />
        </div>
        <div className='w-full my-4 px-4 lg:w-2/6 md:w-3/6 md:my-8'>
          Loan amount:
          <div className='text-2xl font-extrabold'>
            <NumberFormat
              prefix={' $'}
              value={principal}
              displayType={'text'}
              thousandSeparator={true}
            />
          </div>
        </div>
        <div className='w-full my-4 px-4 lg:w-2/6 md:w-3/6 md:my-8'>
          Estimated per month:
          <div className='text-2xl font-extrabold'>
            <NumberFormat
              prefix={' $'}
              value={monthlyPayment}
              displayType={'text'}
              thousandSeparator={true}
            />
          </div>
        </div>
        <div className='w-full mt-4 px-4 md:mt-12 md:w-96'>
          <button
            disabled={buttonDisabled}
            className={`
              w-full
              text-white
              p-4
              rounded
              
              ${
                buttonDisabled
                  ? 'bg-gray-500 cursor-default'
                  : 'bg-green-500 hover:bg-green-800 hover:shadow-md'
              }`}
          >
            Get A Mortgage Quote
          </button>
        </div>
      </form>
      <div>
        {paymentSummary ? (
          <PaymentSummary
            monthlyPayment={monthlyPayment}
            biweeklyPayment={biweeklyPayment}
            downPaymentPercent={downPaymentPercent}
            totalMortgageCost={totalMortgageCost}
            totalInterestPaid={totalInterestPaid}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MortgageCalculator;
