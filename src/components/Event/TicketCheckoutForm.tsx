import * as React from 'react';
import { useState } from 'react';
import { formatPrice } from '../../lib';
import { TicketSelection } from './TicketSelection';
import { EventCartProps } from '../../@types/types';
interface TicketCheckout {
  setMode: any;
  cart: EventCartProps[];
  setCart: any;
  total: any;
  setTotal: any;
  ticketTypes: any;
}

export const TicketCheckoutForm: React.FunctionComponent<TicketCheckout> = ({
  ticketTypes,
  setMode,
  setCart,
  cart,
  total,
  setTotal,
}) => {
  const [emptyCart, setEmptyCart] = useState<boolean>(true);
  console.log('cart', cart);
  const updateCart = async (ticketName: any, quantity: number) => {
    const newCart = Object.assign(cart, {
      [ticketName]: {
        price: ticketTypes[ticketName].price,
        quantity,
      },
    });
    if (quantity <= 0) delete newCart[ticketName];
    let newTotal = 0;
    for (var tix in newCart) {
      newTotal += newCart[tix].quantity * (newCart[tix].price * 1.12);
    }
    setCart(newCart);
    setTotal(newTotal);
    setEmptyCart(Object.keys(cart).length > 0 ? false : true);
  };

  return (
    <div className="pb5">
      <form className="w-100 mv3 mw7 center">
        <ul className="list pl0 mt0  ">
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
        {!emptyCart && (
          <div className="dib w-100">
            <span className="fl pt2 f3-ns f4 db">
              Total: {formatPrice(total.toString())}
            </span>
            <span
              onClick={() => setMode(2)}
              className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-l f4-m f5 fw5-ns ml fw6 fr"
            >
              Next
            </span>
            <span
              onClick={() => setMode(0)}
              className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-l f4-m f5 fw5-ns mr2 fw6 fr"
            >
              Cancel
            </span>
          </div>
        )}
      </form>
    </div>
  );
};
