import * as React from 'react';
import { useState } from 'react';
import { formatPrice } from '../../lib';

interface EventProps {
  setMode: any;
  cart: any;
  setCart: any;
  ticketTypes: {
    ticketName: string;
    quantity: number;
    price: number;
    description: string;
    enabled: boolean;
    count: boolean;
  };
}

export const UserCheckoutForm: React.FunctionComponent<EventProps> = ({
//   ticketTypes,
  setMode,
//   setCart,
//   cart,
}) => {
  const [total] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>('');

  return (
    <div className=" w-100">
      <h2 className="ttu mt0">Checkout</h2>
      <form className="w-100">
        <ul className="list pl0 mt0 measure center">
        <li
      className={`flex items-center pa3 ph0-l`}
    >
      <div className="pl3-ns flex-auto">
        <span className="f4-ns f5 fw7-ns fw5 db ">{`First Name`}</span>
        <span className="f5-ns f6 fw6-ns fw4 db gray">
          {`FEE`}
        </span>
      </div>
      <div className="fr">
     
        <input
          value={firstName}
          className="bg-transparent tc white bb bt-0 br-0 bl-0 w3-ns w2 mh3-ns mh1"
          onChange={(e) => 
            setFirstName((e.currentTarget.value));
          }
        />
       
      </div>
    </li>
  
        </ul>
      </form>
      {(
        <div className="dib w-100">
          <span className="fl pt2 f3-ns f4 db">
            Total: {formatPrice(total.toString())}
          </span>
          <span
            onClick={() => setMode(3)}
            className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-ns f4 fw5-ns fw6 fr"
          >
            Next
          </span>
        </div>
      )}
    </div>
  );
};
