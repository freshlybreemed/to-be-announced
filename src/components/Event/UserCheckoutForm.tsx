import * as React from 'react';
import { useState } from 'react';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.us';
import { formatPrice } from '../../lib';

interface EventProps {
  setMode: any;
  total: number;
}

export const UserCheckoutForm: React.FunctionComponent<EventProps> = ({
  setMode,
  total,
}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');

  const validateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      console.log('You have entered an valid email address!');
      return true;
    }
    console.log('You have entered an invalid email address!');
    return false;
  };
  return (
    <div className=" w-100">
      <h2 className="ttu mt0">Checkout</h2>
      <form className="w-100">
        <div className="mv3">
          <label className="f5-ns f6 fw7-ns fw5 db ">First Name</label>

          <input
            value={firstName}
            className="bg-transparent white bb bt-0 br-0 bl-0  w-70-ns w-100"
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
        </div>
        <div className="mv3">
          <label className="f5-ns f6 fw7-ns fw5 db ">Last Name</label>

          <input
            value={lastName}
            className="bg-transparent white bb bt-0 br-0 bl-0  w-70-ns w-100"
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
        </div>
        <div className="mv3">
          <label className="f5-ns f6 fw7-ns fw5 db ">Email Address</label>

          <input
            value={emailAddress}
            className="bg-transparent white bb bt-0 br-0 bl-0  w-70-ns w-100"
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
            className="bg-transparent white bb bt-0 br-0 bl-0 w-70-ns w-100"
            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
          />
        </div>
      </form>
      {
        <div className="dib w-100 flex justify-between">
          <span className="fl pt2 f3-ns f4 db">
            Total: {formatPrice(total.toString())}
          </span>
          <span
            onClick={() => setMode(3)}
            className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-ns f4 fw5-ns fw6 fr"
          >
            {total > 0 ? `Pay` : `Complete`}
          </span>
        </div>
      }
    </div>
  );
};
