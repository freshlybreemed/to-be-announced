import * as React from 'react';
import { useState } from 'react';
// interface TicketProps {
//   name: string;
//   quantity: number;
//   price: number;
//   description: string;
//   enabled: boolean;
// }

export const TicketCreationForm: React.FunctionComponent = () => {
  const [ticketName, setTicketName] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <div>
      {' '}
      <div className="mv3">
        <input
          value={ticketName}
          onChange={(event) => {
            setTicketName(event.currentTarget.value);
          }}
          className="pa2 bt-0 br-0 bl-0 input-reset  bb bg-black white mr3  w-75-ns w-100"
          placeholder="Ticket Name"
        />
      </div>
      <div className="mv3">
        <input
          value={quantity}
          onChange={(event) => {
            setQuantity(event.currentTarget.value);
          }}
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3  w-75-ns w-100"
          placeholder="Ticket Quantity"
        />
      </div>
      <div className="mv3">
        <input
          value={description}
          onChange={(event) => {
            setDescription(event.currentTarget.value);
          }}
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3  w-75-ns w-100"
          placeholder="Ticket Description"
        />
      </div>
      <div className="mt3">
        <label className="pa2 input-reset mr3 gray w-75-ns w-100">
          Refundable?
        </label>
        <input type="checkbox" />
      </div>
      <div className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 ">
        Add
      </div>
      <div className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5">
        Reset
      </div>
    </div>
  );
};
