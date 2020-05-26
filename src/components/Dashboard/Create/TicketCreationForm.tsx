import * as React from 'react';
import { useState } from 'react';
import Cleave from 'cleave.js/react';
import { TicketProps } from '../../../@types/types';

interface TicketingProps {
  addTicket: any;
  updateTicket: any;
  ticket: TicketProps;
}

export const TicketCreationForm: React.FunctionComponent<TicketingProps> = ({
  addTicket,
  updateTicket,
  ticket,
}) => {
  const [ticketName, setTicketName] = useState<string>(
    ticket ? ticket.ticketName : ''
  );
  const [quantity, setQuantity] = useState<number>(
    ticket ? ticket.quantity : 0
  );
  const [price, setPrice] = useState<number>(ticket ? ticket.price : 0);
  const [description, setDescription] = useState<string>(
    ticket ? ticket.description : ''
  );
  console.log({ ticket, ticketName, quantity, description });
  return (
    <div className="mw6 center">
      <div className="mv3">
        <label className="f5-ns f6 fw7-ns fw5 db tl">Ticket Name</label>

        <input
          value={ticketName}
          onChange={(event) => {
            setTicketName(event.currentTarget.value);
          }}
          className="pa2 bt-0 br-0 bl-0 input-reset  bb bg-black white mr3  w-100"
        />
      </div>
      <div className="mv3">
        <label className="f5-ns f6 fw7-ns fw5 db tl">Ticket Quantity</label>
        <input
          value={quantity}
          onChange={(event) => {
            setQuantity(parseInt(event.currentTarget.value));
          }}
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3  w-100"
        />
      </div>
      <div className="mv3">
        <label className="f5-ns f6 fw7-ns fw5 db tl">Ticket Description</label>
        <input
          value={description}
          onChange={(event) => {
            setDescription(event.currentTarget.value);
          }}
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3  w-100"
        />
      </div>
      <div className="mv3">
        {/* <span>$</span> */}
        <label className="f5-ns f6 fw7-ns fw5 db tl">Price</label>
        <Cleave
          style={{ boxSizing: 'initial' }}
          value={price}
          onChange={(event) => {
            setPrice(parseInt(event.currentTarget.value));
          }}
          options={
            {
              // prefix: true ? '$' : '',
            }
          }
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3   w-100"
          placeholder="Ticket Price"
        />
      </div>
      <div className="mt3">
        <label className="pa2 input-reset mr3 gray w-75-ns w-100">
          Refundable?
        </label>
        <input type="checkbox" />
      </div>
      {!ticket && (
        <div
          onClick={() =>
            addTicket({
              ticketName,
              quantity,
              description,
              price,
              enabled: true,
            })
          }
          className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 "
        >
          Add
        </div>
      )}
      {ticket && (
        <div
          onClick={() =>
            updateTicket({ ticketName, quantity, description, price })
          }
          className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 "
        >
          Update
        </div>
      )}
    </div>
  );
};
