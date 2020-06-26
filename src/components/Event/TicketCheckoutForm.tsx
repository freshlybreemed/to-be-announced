import FadeIn from 'react-fade-in';
import shortid from 'shortid'
import * as React from 'react';
import { useState } from 'react';
import { formatPrice } from '../../lib';
import { TicketSelection } from './';
import { EventCartProps, TicketProps } from '../../@types/types';
interface TicketCheckout {
  setMode: any;
  cart: {
    [ticketName: string]: EventCartProps;
  };
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
  const updateCart = async (ticket: TicketProps, quantity: number) => {
    const newCart = Object.assign(cart, {
      [ticket.ticketName]: {
        price: ticket.price,
        quantity,
        fee: ticket.fee,
        _id: ticket._id,
        ticketNumber: shortid.generate()
      },
    });
    if (quantity <= 0) delete newCart[ticket.ticketName];
    let newTotal = 0;
    for (var tix in newCart) {
      newTotal +=
        newCart[tix].quantity * (newCart[tix].price + newCart[tix].fee);
    }
    setCart(newCart);
    setTotal(newTotal);
    setEmptyCart(Object.keys(cart).length === 0);
  };

  return (
    <div className="pv3">
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
          <FadeIn>
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
            </div>
          </FadeIn>
        )}
      </form>
    </div>
  );
};
