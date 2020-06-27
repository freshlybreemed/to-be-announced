import * as React from 'react';
import { formatPrice } from '../../lib';
import classnames from 'classnames';
import { useState } from 'react';
import { TicketProps, EventCartProps } from '../../@types/types';

interface EventProps {
  updateCart: any;
  cart: {
    [ticketName: string]: EventCartProps;
  };  ticketType: TicketProps;
}

export const TicketSelection: React.FunctionComponent<EventProps> = ({
  ticketType,
  updateCart,
  cart
}) => {
  const [quantity, setQuantity] = useState<number>(ticketType.ticketName in cart? cart[ticketType.ticketName].quantity:0);
  const freeTix = ticketType.price > 0 ? false : true;
  const soldOut = quantity + 1 > ticketType.quantity - ticketType.sold;
  const disabled = !ticketType.enabled;
  return (
    <li
      className={`flex items-center pa3 ph0-l ${classnames({
        'bb b--gray bw1': true,
      })}`}
      key={ticketType.ticketName}
    >
      <div className="pl3-ns flex-auto">
        <span className="f4-ns f5 fw7-ns fw5 db ">{ticketType.ticketName}</span>
        <span className="f5-ns f6 fw6-ns fw4 db gray">
          {`${formatPrice(ticketType.price.toString())} `}
          {!freeTix &&
            `+ ${formatPrice(
              parseFloat(ticketType.fee.toString()).toString()
            )} FEE`}
        </span>
      </div>
      <div className="fr">
        {!disabled && !soldOut && (
          <>
            <span
              onClick={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                  updateCart(ticketType, quantity - 1);
                }
              }}
              className="f3 noselect br-100 ph2 pb1 bg-white black"
            >
              -
            </span>
            <input
              type="number"
              value={quantity}
              className="bg-transparent tc white bb bt-0 br-0 bl-0 w3-ns w2 mh3-ns mh1"
              onChange={(e) => {
                setQuantity(parseInt(e.currentTarget.value));
                updateCart(ticketType, e.currentTarget.value);
              }}
            />
            <span
              onClick={() => {
                if (!soldOut) {
                  setQuantity(quantity + 1);
                  updateCart(ticketType, quantity + 1);
                }
              }}
              className={`f3 noselect br-100 ph2 pb1 ${classnames({
                'bg-white': !soldOut,
                'bg-white-': soldOut,
              })} black`}
            >
              +
            </span>
          </>
        )}
        {soldOut && <div className="f4-ns f5 fw7-ns fw5 ph4">Sold Out</div>}
      </div>
    </li>
  );
};
