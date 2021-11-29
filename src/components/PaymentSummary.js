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
    <div className='px-4'>
      <hr className='mt-14 mb-10' />
      <h2 className='font-semibold text-2xl'>Payment Summary</h2>
      <div className='flex flex-wrap justify-start'>
        <div className='w-full my-4 md:w-6/12 lg:w-4/12'>
          <p>Monthly Mortgage Payment</p>
          <span className='text-xl font-bold'>
            <NumberFormat
              prefix={'$'}
              value={monthlyPayment}
              displayType={'text'}
              thousandSeparator={true}
            />
          </span>
        </div>
        <div className='w-full my-4 md:w-6/12 lg:w-4/12'>
          <p>Biweekly Mortgage Payment</p>
          <span className='text-xl font-bold'>
            <NumberFormat
              prefix={'$'}
              value={biweeklyPayment}
              displayType={'text'}
              thousandSeparator={true}
            />
          </span>
        </div>
        <div className='w-full my-4 md:w-6/12 lg:w-4/12'>
          <p>Down Payment %</p>
          <span className='text-xl font-bold'>
            <NumberFormat
              suffix={'%'}
              value={downPaymentPercent}
              displayType={'text'}
              thousandSeparator={true}
            />
          </span>
        </div>
        <div className='w-full my-4 md:w-6/12 lg:w-4/12'>
          <p>Total Interest</p>
          <span className='text-xl font-bold'>
            <NumberFormat
              prefix={'$'}
              value={totalInterestPaid}
              displayType={'text'}
              thousandSeparator={true}
            />
          </span>
        </div>
        <div className='w-full my-4 md:w-6/12 lg:w-4/12'>
          <p>Total Cost of Mortgage</p>
          <span className='text-xl font-bold'>
            <NumberFormat
              prefix={'$'}
              value={totalMortgageCost}
              displayType={'text'}
              thousandSeparator={true}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
