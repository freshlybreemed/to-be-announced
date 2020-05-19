import * as React from 'react';
import { formatPrice } from '../../lib';
import classnames from 'classnames';
import { useState } from 'react';

interface EventProps {
  updateCart: any;
  ticketType: {
    ticketName: string;
    quantity: number;
    price: string;
    description: string;
    enabled: boolean;
    count: number;
  };
}

export const TicketSelection: React.FunctionComponent<EventProps> = ({
  ticketType,
  updateCart,
}) => {
  const [count, setCount] = useState<number>(ticketType.count);

  const freeTix = parseInt(ticketType.price) > 0 ? false : true;
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
          {`${formatPrice(ticketType.price)} `}
          {!freeTix &&
            `+ ${formatPrice(
              (parseFloat(ticketType.price) * 0.12).toString()
            )} FEE`}
        </span>
      </div>
      <div className="fr">
        {/* <span className="f4-ns f5 fw4 ">Quantity: </span> */}
        <span
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
              updateCart(ticketType.ticketName, count - 1);
            }
          }}
          className="f3  "
        >
          -
        </span>
        <input
          type="number"
          value={count}
          className="bg-transparent tc white bb bt-0 br-0 bl-0 w3-ns w2 mh3-ns mh1"
          onChange={(e) => {
            setCount(parseInt(e.currentTarget.value));
            updateCart(ticketType.ticketName, e.currentTarget.value);
          }}
        />
        <span
          onClick={() => {
            if (count <= ticketType.quantity) {
              setCount(count + 1);
              updateCart(ticketType.ticketName, count + 1);
            }
          }}
          className="f3"
        >
          +
        </span>
      </div>
    </li>
  );
};
