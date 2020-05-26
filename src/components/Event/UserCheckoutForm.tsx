import * as React from 'react';
import { useState } from 'react';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.us';
import { formatPrice } from '../../lib';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { EventProps } from '../../../src/@types/types';

interface EventCheckoutProps {
  setMode: any;
  total: number;
  event: EventProps;
  cart: string;
}

export const UserCheckoutForm: React.FunctionComponent<EventCheckoutProps> = ({
  total,
  event,
  cart,
}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const stripe = useStripe();

  const validateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      console.log('You have entered an valid email address!');
      return true;
    }
    console.log('You have entered an invalid email address!');
    return false;
  };

  const handleCheckout: React.FormEventHandler<HTMLSpanElement> = async (e) => {
    e.preventDefault();
    // Create a Checkout Session.
    const response = await axios.post('/api/stripe', {
      amount: total,
      eventName: event.name,
      slug: event.slug,
      emailAddress,
      image: event.image,
      cart,
    });

    if (response.data.statusCode === 500) {
      console.error(response.data.message);
      return;
    }

    // Redirect to Checkout.
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.data.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
  };
  return (
    <div className=" w-100">
      <form className="w-100 pt4 mw7 center">
        <div className="mv3">
          <label className="f5-ns f6 fw7-ns fw5 db ">First Name</label>

          <input
            value={firstName}
            className="bg-transparent white bb bt-0 br-0 bl-0  w-100"
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
        </div>
        <div className="mv3">
          <label className="f5-ns f6 fw7-ns fw5 db ">Last Name</label>

          <input
            value={lastName}
            className="bg-transparent white bb bt-0 br-0 bl-0  w-100"
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
        </div>
        <div className="mv3">
          <label className="f5-ns f6 fw7-ns fw5 db ">Email Address</label>

          <input
            value={emailAddress}
            className="bg-transparent white bb bt-0 br-0 bl-0  w-100"
            onChange={(e) => {
              setEmailAddress(e.currentTarget.value);
              validateEmail(emailAddress);
            }}
          />
        </div>
        <div className="mv3">
          <label className="f5-ns f6 fw7-ns fw5 db ">Phone Number</label>

          <Cleave
            value={phoneNumber}
            options={{ phone: true, phoneRegionCode: 'US' }}
            className="bg-transparent white bb bt-0 br-0 bl-0 w-100"
            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
          />
        </div>
        {
          <div className="dib w-100 flex justify-between">
            <span className="fl pt2 f3-ns f4 db">
              Total: {formatPrice(total.toString())}
            </span>
            <span
              onClick={handleCheckout}
              className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-ns f4 fw5-ns fw6 fr"
            >
              {total > 0 ? `Pay` : `Complete`}
            </span>
          </div>
        }
      </form>
    </div>
  );
};
