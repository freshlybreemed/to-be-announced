import * as React from 'react';
// import { useState } from 'react';
import 'cleave.js/dist/addons/cleave-phone.us';
import { CardElement } from '@stripe/react-stripe-js';

// Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

interface PaymentCheckoutProps {
  handleChange: any;
}

export const PaymentCardSection: React.FunctionComponent<PaymentCheckoutProps> = ({
  handleChange,
}) => {
  return (
    <CardElement
      id="card-element"
      options={CARD_ELEMENT_OPTIONS}
      onChange={handleChange}
    />
  );
};
