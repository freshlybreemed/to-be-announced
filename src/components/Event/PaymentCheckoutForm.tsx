import * as React from 'react';
// import { useState } from 'react';
import { PaymentCardSection } from './PaymentCardSection';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import 'cleave.js/dist/addons/cleave-phone.us';
import { formatPrice } from '../../lib';
import axios from 'axios';
import shortid from 'shortid';
import {
  EventProps,
  // OrderProps,
  EventCartProps,
  UserTicketProps,
} from '../../../src/@types/types';
import { useState } from 'react';

interface PaymentCheckoutProps {
  setMode: any;
  mode: any;
  total: number;
  event: EventProps;
  cart: {
    [ticketName: string]: EventCartProps;
  };
}

export const PaymentCheckoutForm: React.FunctionComponent<PaymentCheckoutProps> = ({
  total,
  event,
  cart,
  setMode,
  mode,
}) => {
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState<string>(null);
  const [readyToCheckout, setReadyToCheckout] = useState<boolean>(false);
  const [order, setOrder] = useState<object>(null);

  const stripe = useStripe();
  const elements = useElements();

  const prepareCheckout = async () => {
    const { ticketTypes } = event;
    const _id = shortid.generate();
    const tickets = [] as UserTicketProps[];
    Object.keys(cart).forEach((curr) => {
      const tix = cart[curr];
      for (var i = 0; i < tix.quantity; i++) {
        const tempTix = ticketTypes[tix._id];
        tickets.push({
          ticketName: tempTix.ticketName,
          fee: tempTix.fee,
          price: tempTix.price,
          description: tempTix.description,
          donation: tempTix.donation,
          free: tempTix.free,
          barCode: shortid.generate(),
          orderId: _id,
          eventId: event._id,
          checkedIn: null,
          checkInDate: null,
        });
      }
    });
    const order = {
      // emailAddress,
      // firstName,
      // lastName,
      eventId: event._id,
      _id,
      // phoneNumber,
      checkedIn: false,
      refunded: false,
      cancelled: false,
      status: 'copped',
      tickets,
      total,
      orderDate: new Date(),
      cart,
    };
    const response = await axios.post('/api/stripe', {
      order,
      event,
    });

    if (response.data.statusCode === 500) {
      console.error(response.data.message);
      return;
    }
    const {
      data: { client_secret },
    } = response;
    setOrder(order);
    setReadyToCheckout(true);
    setClientSecret(client_secret);
    return client_secret;
  };
  !readyToCheckout && mode === 4 && prepareCheckout();
  const handleCheckout = async () => {
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
    setMode(5);
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
        <div className="dt w-100">
          <label>Credit or debit card</label>
          <PaymentCardSection handleChange={handleChange} />
          <div className="card-errors" role="alert">
            {error}
          </div>
        </div>

        {
          <div className="dib w-100 ">
            <span className="fl pt2 f3-ns f4 db">
              Total: {formatPrice(total.toString())}
            </span>
            {!error && (
              <span
                onClick={() => handleCheckout() && setMode(3)}
                className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-l f4-m f5 fw5-ns ml fw6 fr"
              >
                {total > 0 ? `Pay` : `Next`}
              </span>
            )}
            <span
              onClick={() => setMode(1)}
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
