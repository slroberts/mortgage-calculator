import React from 'react';
import NumberFormat from 'react-number-format';

const PaymentSummary = ({
  monthlyPayment,
  downPaymentPercent,
  biweeklyPayment,
  totalInterestPaid,
  totalMortgageCost,
}) => {
  return (
    <div>
      <h1>Payment Summary</h1>
      <div>
        <p>Principal & Interest</p>
        <NumberFormat
          prefix={' $'}
          value={monthlyPayment}
          displayType={'text'}
          thousandSeparator={true}
        />
      </div>
      <div>
        <p>Total Monthly Payment</p>
        <NumberFormat
          prefix={' $'}
          value={monthlyPayment}
          displayType={'text'}
          thousandSeparator={true}
        />
      </div>
      <div>
        <p>Down Payment %</p>
        <NumberFormat
          suffix={'%'}
          value={downPaymentPercent}
          displayType={'text'}
          thousandSeparator={true}
        />
      </div>
      <div>
        <p>Monthly Mortgage Payment</p>
        <NumberFormat
          prefix={'$'}
          value={monthlyPayment}
          displayType={'text'}
          thousandSeparator={true}
        />
      </div>
      <div>
        <p>Biweekly Mortgage Payment</p>
        <NumberFormat
          prefix={'$'}
          value={biweeklyPayment}
          displayType={'text'}
          thousandSeparator={true}
        />
      </div>
      <div>
        <p>Total Interest Paid</p>
        <NumberFormat
          prefix={'$'}
          value={totalInterestPaid}
          displayType={'text'}
          thousandSeparator={true}
        />
      </div>
      <div>
        <p>Total Cost of Mortgage</p>
        <NumberFormat
          prefix={'$'}
          value={totalMortgageCost}
          displayType={'text'}
          thousandSeparator={true}
        />
      </div>
    </div>
  );
};

export default PaymentSummary;
