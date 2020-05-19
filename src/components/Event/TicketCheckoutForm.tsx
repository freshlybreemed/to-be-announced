import * as React from 'react';
import { useState } from 'react';
import { formatPrice } from '../../lib';
import { TicketSelection } from './TicketSelection';

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

export const TicketCheckoutForm: React.FunctionComponent<EventProps> = ({
  ticketTypes,
  setMode,
  setCart,
  cart,
}) => {
  const [total, setTotal] = useState<number>(0);
  const [emptyCart, setEmptyCart] = useState<boolean>(true);

  const updateCart = async (ticketName: any, count: number) => {
    const newCart = Object.assign(cart, {
      [ticketName]: {
        ...ticketTypes[ticketName],
        count,
      },
    });
    if (count <= 0) delete newCart[ticketName];
    let newTotal = 0;
    for (var tix in newCart) {
      newTotal += newCart[tix].count * (newCart[tix].price * 1.12);
    }
    setCart(newCart);
    setTotal(newTotal);
    setEmptyCart(Object.keys(cart).length > 0 ? false : true);
  };
  return (
    <div className=" w-100">
      <h2 className="ttu mt0">Tickets</h2>
      <form className="w-100">
        <ul className="list pl0 mt0 measure center">
          {Object.keys(ticketTypes).map((curr) => {
            return (
              <TicketSelection
                key={curr}
                updateCart={updateCart}
                ticketType={ticketTypes[curr]}
              />
            );
          })}
        </ul>
      </form>
      {!emptyCart && (
        <div className="dib w-100">
          <span className="fl pt2 f3-ns f4 db">
            Total: {formatPrice(total.toString())}
          </span>
          <span
            onClick={() => setMode(2)}
            className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-ns f4 fw5-ns fw6 fr"
          >
            Next
          </span>
        </div>
      )}
    </div>
  );
};
