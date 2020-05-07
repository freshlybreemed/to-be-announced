import * as React from 'react';
import { useState } from 'react';

interface TicketProps {
  addTicket: any;
  updateTicket: any;
  ticket: any;
}

export const TicketCreationForm: React.FunctionComponent<TicketProps> = ({
  addTicket,
  updateTicket,
  ticket,
}) => {
  const [ticketName, setTicketName] = useState<string>(
    ticket ? ticket.ticketName : '',
  );
  const [quantity, setQuantity] = useState<string>(
    ticket ? ticket.quantity : '',
  );
  const [price, setPrice] = useState<string>(ticket ? ticket.price : '');
  const [description, setDescription] = useState<string>(
    ticket ? ticket.description : '',
  );
  const [_id] = useState<string>(ticket ? ticket._id : '');
  console.log({ ticket, ticketName, quantity, description });
  return (
    <>
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
      <div className="mv3">
        <input
          value={price}
          onChange={(event) => {
            setPrice(event.currentTarget.value);
          }}
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3  w-75-ns w-100"
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
          onClick={() => addTicket({ ticketName, quantity, description })}
          className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 "
        >
          Add
        </div>
      )}
      {ticket && (
        <div
          onClick={() =>
            updateTicket({ ticketName, quantity, description, _id })
          }
          className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 "
        >
          Update
        </div>
      )}
    </>
  );
};
