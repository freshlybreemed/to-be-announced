import * as React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

// Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#fff',
      color: '#fff',
      fontWeight: 400,
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',

      '::placeholder': {
        color: '#aab7c4',
      },
      ':-webkit-autofill': {
        color: '#fce883',
      },
    },
    invalid: {
      iconColor: '#FF0000',
      color: '#FF0000',
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
    <div className="ba-hover pa2">
      <CardElement
        id="card-element"
        options={CARD_ELEMENT_OPTIONS}
        onChange={handleChange}
      />
    </div>
  );
};
