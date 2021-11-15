import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import PaymentSummary from './PaymentSummary';

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(10);
  const [interestRate, setInterestRate] = useState(3);
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
  const biweeklyPayment = (paymentPerMonth() / 2).toFixed(2);
  const downPaymentPercent = Math.round((downPayment / purchasePrice) * 100);
  const totalMortgageCost = (paymentPerMonth() * numberOfPayments).toFixed(2);
  const totalInterestPaid = (totalMortgageCost - principal).toFixed(2);

  const handleChange = (e, setValue) => {
    setValue(e.target.value);

    if (!principal) {
      setButtonDisabled(!buttonDisabled);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPaymentSummary(true);
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>
          <div>
            Purchase price:
            <NumberFormat
              prefix={' $'}
              value={purchasePrice}
              displayType={'text'}
              thousandSeparator={true}
            />
          </div>
          <input
            name='purchasePrice'
            defaultValue={purchasePrice}
            onChange={(e) => handleChange(e, setPurchasePrice)}
            type='range'
            min='0'
            max='1000000'
            step='100'
          />
        </div>
        <div>
          <div>
            Down payment:
            <NumberFormat
              prefix={' $'}
              value={downPayment}
              displayType={'text'}
              thousandSeparator={true}
            />
          </div>
          <input
            name='downPayment'
            defaultValue={downPayment}
            onChange={(e) => handleChange(e, setDownPayment)}
            type='range'
            min='0'
            max='1000000'
            step='100'
          />
        </div>
        <div>
          <div>
            Repayment time:{' '}
            <NumberFormat
              suffix={repaymentTime > 1 ? ' years' : ' year'}
              value={repaymentTime}
              displayType={'text'}
              thousandSeparator={false}
            />
          </div>
          <input
            name='repaymentTime'
            defaultValue={repaymentTime}
            onChange={(e) => handleChange(e, setRepaymentTime)}
            type='range'
            min='0'
            max='30'
            step='5'
          />
        </div>
        <div>
          <div>
            Interest rate:{' '}
            <NumberFormat
              suffix={'%'}
              value={interestRate}
              displayType={'text'}
              thousandSeparator={true}
            />
          </div>
          <input
            name='interestRate'
            defaultValue={interestRate}
            onChange={(e) => handleChange(e, setInterestRate)}
            type='range'
            min='1'
            max='15'
            step='.1'
          />
        </div>
        <div>
          Loan amount
          <NumberFormat
            prefix={' $'}
            value={principal}
            displayType={'text'}
            thousandSeparator={true}
          />
        </div>
        <div>
          Estimated per month:
          <NumberFormat
            prefix={' $'}
            value={monthlyPayment}
            displayType={'text'}
            thousandSeparator={true}
          />
        </div>
        <button disabled={buttonDisabled}>Get A Mortgage Quote</button>
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
