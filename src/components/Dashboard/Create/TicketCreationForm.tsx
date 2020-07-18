import * as React from 'react';
import { useState } from 'react';
import Cleave from 'cleave.js/react';
import { DateTimePicker } from './DateTimePicker';
import { TicketProps } from '../../../@types/types';
import { validTicketEndDate } from '../../../lib';

interface TicketingProps {
  addTicket: any;
  updateTicket: any;
  timeZoneId: string;
  removeTicket: any;
  ticket: TicketProps;
  startDate: Date;
}

export const TicketCreationForm: React.FunctionComponent<TicketingProps> = ({
  addTicket,
  updateTicket,
  ticket,
  startDate,
  timeZoneId,
  removeTicket,
}) => {
  const [ticketName, setTicketName] = useState<string>(
    ticket ? ticket.ticketName : ''
  );
  const [_id] = useState<number>(ticket ? ticket._id : 0);
  const [quantity, setQuantity] = useState<string>(
    ticket ? ticket.quantity.toString() : '0'
  );
  const [sold] = useState<number>(ticket ? ticket.sold : 0);
  const [enabled] = useState<boolean>(ticket ? ticket.enabled : true);
  const [price, setPrice] = useState<string>(
    ticket ? ticket.price.toString() : '0'
  );
  const [description, setDescription] = useState<string>(
    ticket ? ticket.description : '',
  );
  const [ticketEndDate, setTicketEndDate] = useState<Date>(
    ticket ? moment.tz(ticket.ticketEndDate, timeZoneId).toDate() : null,
  );
  const [ticketError, setTicketError] = useState<any>({
    ticketName: '',
    quantity: '',
    price: '',
  });
  const updatedTicket: TicketProps = {
    ticketName,
    _id,
    quantity: parseInt(quantity),
    description,
    price: parseInt(price),
    fee: parseInt(price) * 0.12,
    free: parseInt(price) === 0,
    donation: false,
    sold,
    enabled,
    ticketEndDate,
  };
  const checkForErrors = async (item: any) => {
    console.log(item, ticketError);
    const key = Object.keys(item)[0];
    switch (key) {
      case 'ticketName':
        return setTicketError({
          ...ticketError,
          ticketName: item[key].length > 0 ? '' : 'Ticket Name Missing',
        });
      case 'price':
        return setTicketError({
          ...ticketError,
          price: /^\d+$/.test(item[key]) ? '' : 'Not a number',
        });
      case 'quantity':
        return setTicketError({
          ...ticketError,
          quantity: item[key].length > 0 ? '' : 'Not a number',
        });
      default:
        break;
    }
    console.log('yo', ticketError);
  };

  return (
    <div className="mw6 center w-75-ns w-100">
      <div className="mv3  tl ba">
        <label className="f6-ns f7 fw6-ns db pl2 pt2 pb1">Ticket Name</label>

        <input
          value={ticketName}
          onChange={async (event) => {
            setTicketName(event.currentTarget.value);
            checkForErrors({ ticketName: event.currentTarget.value });
          }}
          className="pl2 pb2 bn input-reset  mr3  w-90"
        />
        <small className="hljs-strong tl f6 db mv1 red">
          {ticketError.ticketName}
        </small>
      </div>
      <div className="mv3  tl ba">
        <label className="f6-ns f7 fw6-ns db pl2 pt2 pb1">
          Ticket Quantity
        </label>
        <input
          value={quantity}
          type="number"
          onChange={async (event) => {
            setQuantity(event.currentTarget.value);
            checkForErrors({ quantity: event.currentTarget.value });
          }}
          className="pl2 pb2 bn absolute-centerbn input-reset  mr3  w-90"
          inputMode="decimal"
        />
        <small className="hljs-strong tl f6 db mv1 red">
          {ticketError.quantity}
        </small>
      </div>
      <div className="mv3 tl ba">
        <label className="f6-ns f7 fw6-ns db pl2 pt2 pb1">
          Ticket Description
        </label>
        <input
          value={description}
          onChange={(event) => {
            setDescription(event.currentTarget.value);
          }}
          className="pl2 pb2 bn input-reset  mr3  w-90"
        />
      </div>
      <div className="mv3 tl ba">
        <label className="f6-ns f7 fw6-ns db pl2 pt2 pb1">Price</label>
        <span style={{ minWidth: '40px' }} className="absolute pl2 pb2 tl">
          $
        </span>
        <Cleave
          style={{ boxSizing: 'initial' }}
          value={price}
          onChange={async (event) => {
            setPrice(event.currentTarget.value);
            checkForErrors({ price: event.currentTarget.value });
          }}
          options={{}}
          className="pb2 pl3 bn input-reset ml1  w-90"
          type="number"
          inputMode="decimal"
        />
        <small className="hljs-strong tl f6 db mv1 red">
          {ticketError.price}
        </small>
      </div>
      <div className="mv3 tl ba">
        <label className="f6-ns f7 fw6-ns db pl2 pt2 pb1">End Date</label>
        <DateTimePicker
          timeZoneId={timeZoneId}
          setDate={setTicketEndDate}
          isValidDate={validTicketEndDate(startDate)}
          date={ticketEndDate}
        />
      </div>

      {!ticket && (
        <div
          onClick={() => addTicket(updatedTicket)}
          className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 "
        >
          Add
        </div>
      )}
      {ticket && (
        <>
          <div
            onClick={() => updateTicket(updatedTicket)}
            className="mt4 b--black hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 "
          >
            Update
          </div>
          <div
            onClick={() => removeTicket(updatedTicket)}
            className="mt4 b--black hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 "
          >
            Remove
          </div>
        </>
      )}
    </div>
  );
};
