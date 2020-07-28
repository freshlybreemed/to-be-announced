import * as React from 'react';
// import { useState } from 'react';
import { PaymentCardSection } from './PaymentCardSection';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import 'cleave.js/dist/addons/cleave-phone.us';
import { formatPrice } from '../../lib';
import axios from 'axios';
import {
  EventProps,
  OrderProps,
  EventCartProps,
} from '../../../src/@types/types';
import { useState } from 'react';

interface PaymentCheckoutProps {
  setMode: any;
  mode: any;
  readyToCheckout: any;
  prepareCheckout: any;
  order: OrderProps;
  total: number;
  event: EventProps;
  cart: {
    [ticketName: string]: EventCartProps;
  };
  clientSecret: string;
}

export const PaymentCheckoutForm: React.FunctionComponent<PaymentCheckoutProps> = ({
  total,
  event,
  setMode,
  mode,
  order,
  clientSecret,
  readyToCheckout,
  prepareCheckout,
}) => {
  const [error, setError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  !readyToCheckout && mode === 4 && prepareCheckout();
  const handlePaidCheckout = async () => {
    const card = elements.getElement(CardElement);
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });

    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
      return setMode(4);
    } else {
      setError(null);
      console.log(result);
      // Send the token to your server.
      await axios.post('/api/ticket', {
        order: {
          ...order,
          token: result.paymentIntent,
        },
        event,
      });
    }
    return setMode(5);
  };

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };
  console.log('error', error);
  return (
    <div className="pv3 w-100">
      <form className="w-100 pt4 mw7 center">
        <div className="dt pb3 mv2 w-100">
          <small className=" db pb1">Credit or debit card</small>
          <PaymentCardSection handleChange={handleChange} />
          <div className="card-errors pt1" role="alert">
            {error}
          </div>
        </div>

        {
          <div className="dib w-100 ">
            <span className="fl pt2 f3-ns f4 db">
              Total: {formatPrice(total.toString())}
            </span>
            {!error && stripe && (
              <span
                onClick={() => handlePaidCheckout() && setMode(3)}
                className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-l f4-m f5 fw5-ns ml fw6 fr"
              >
                Purchase
              </span>
            )}
            <span
              onClick={() => setMode(2)}
              className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-l f4-m f5 fw5-ns mr2 fw6 fr"
            >
              Back
            </span>
          </div>
        }
      </form>
    </div>
  );
};
