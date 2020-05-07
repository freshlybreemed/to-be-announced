import * as React from 'react';
import { useState } from 'react';
import Cleave from 'cleave.js/react';
import Datetime from 'react-datetime';
import axios from 'axios';
import { PlacesAutoComplete } from './PlacesAutoComplete';
import { TicketCreationForm } from './TicketCreationForm';
import { UploadFlyer } from './UploadFlyer';
import { formatDate } from '../../../lib';

interface TicketProps {
  ticketName: string;
  quantity: number;
  price: number;
  description: string;
  enabled: boolean;
  _id: number;
}
export const Create: React.FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [renderStartTimes, setRenderStartTimes] = useState<boolean>(false);
  const [eventType, setEventType] = useState<string>('');
  const [currentTicket, setCurrentTicket] = useState<TicketProps>();
  const [toggleTicketCreation, setToggleTicketCreation] = useState<boolean>(
    false,
  );
  const [ticketTypes, setTicketTypes] = useState<TicketProps[]>([]);

  const addTicket = (ticket: TicketProps) => {
    const tickets = ticketTypes;
    ticket._id = Math.round(Math.random() * ticketTypes.length);
    tickets.push(ticket);
    setTicketTypes(tickets);
    setToggleTicketCreation(false);
  };

  const updateTicket = (ticket: TicketProps) => {
    const tickets = ticketTypes.map((curr) => {
      console.log(ticket, curr);
      if (curr._id === ticket._id) {
        return ticket;
      } else {
        return curr;
      }
    });
    setTicketTypes(tickets);
    setToggleTicketCreation(false);
    setCurrentTicket(null);
  };
  class MyDTPicker extends React.Component {
    render() {
      return (
        <Datetime
          // renderInput={this.renderInput}
          value={startDate}
          onBlur={(e) => setStartDate(e.toString())}
          className="black"
          timeConstraints={{ minutes: { step: 40, min: 0, max: 24 } }}
        />
      );
    }
    renderInput(props, openCalendar, closeCalendar) {
      function clear() {
        props.onChange({ target: { value: '' } });
      }
      return (
        <div>
          <input
            {...props}
            className="pa2 bt-0 br-0 bl-0 input-reset bb  black mr3  w-75-ns w-100"
          />
          <button onClick={openCalendar}>open calendar</button>
          <button onClick={closeCalendar}>close calendar</button>
          <button onClick={clear}>clear</button>
        </div>
      );
    }
  }
  const renderTime = () => (
    <ul
      onClick={() => setRenderStartTimes(!renderStartTimes)}
      className="pl0 list "
    >
      {[
        '12:00 AM',
        '12:30 AM',
        '1:00 AM',
        '1:30 AM',
        '2:00 AM',
        '2:30 AM',
        '3:00 AM',
        '3:30 AM',
        '4:00 AM',
        '5:00 AM',
      ].map((curr) => (
        <li onClick={() => setStartTime(curr)} className="dim mv1 noselect">
          {curr}
        </li>
      ))}
    </ul>
  );

  const setEventLocation = (addy: string) => {
    setLocation(addy);
  };

  console.log({
    name,
    location,
    eventType,
    image,
    startDate,
    startTime,
    ticketTypes,
  });
  const handleSubmit = async () => {
    const eventInfo = {
      name,
      location,
      eventType,
      image,
      startDate: new Date(startDate),
      startTime,
    };
    await axios.post('/api/event', eventInfo);
  };
  return (
    <article className="w-100  ph3-m ph3-l tc">
      <h1 className="f1-ns f2 mt0">Create Event</h1>
      <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Select Event Type</h2>
      <div className="flex items-center db center pt4 mb4">
        {(eventType === '' || eventType === 'venue') && (
          <div
            className=" b--white hover-bg-white center hover-black db noselect br-100 b--solid pa2 ph4 f5 fw5 white"
            onClick={() => setEventType('venue')}
          >
            Venue
          </div>
        )}
        {(eventType === '' || eventType === 'online') && (
          <div
            className=" b--white hover-bg-white center hover-black db noselect br-100 b--solid pa2 ph4 f5 fw5 white"
            onClick={() => setEventType('online')}
          >
            Online Event
          </div>
        )}
      </div>
      <hr className="o-20 mt4" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Enter Event Details</h2>
      <div className="mv3">
        <input
          value={name}
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white  w-75-ns w-100"
          placeholder="Event Name"
        />
      </div>
      <div className="mv3 ">
        <PlacesAutoComplete setLocation={setEventLocation} />
      </div>
      <div className="mv3">
        <Cleave
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white  w-75-ns w-100"
          placeholder="Start Date"
          style={{ boxSizing: 'initial' }}
          options={{
            date: true,
            delimiter: '-',
            datePattern: ['m', 'd', 'Y'],
          }}
          value={startDate}
          onChange={(e) => setStartDate(e.currentTarget.value)}
        />
      </div>
      <div className="mv3">
        <div
          className=" pa2 bt-0 br-0 bl-0 input-reset bb bg-black white w-75-ns w-100 center "
          style={{ boxSizing: 'initial' }}
        >
          <div
            className="tl gray"
            onClick={() => setRenderStartTimes(!renderStartTimes)}
          >
            {startTime.length > 0 ? startTime : 'Start Time'}
          </div>
          {renderStartTimes && renderTime()}
        </div>
      </div>
      <MyDTPicker />
      <div className="mv3">
        <input
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mb3 w-75-ns w-100"
          placeholder="End Date"
        />
      </div>
      <UploadFlyer setImage={setImage} />
      <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Enter Ticket Details</h2>
      <main className="w-75 tl center">
        {ticketTypes.map((curr) => (
          <article className="dt w-100 bb b--gray pb2 mt2">
            <div className="dtc v-mid pl3">
              <h1 className="f6 f5-ns fw7 lh-title mv0 underline-hover">
                <a className="white no-underline" href="">
                  {curr.ticketName}
                </a>
              </h1>
              <h2 className="f6 fw6 mt0 mb1 gray">{`Ends ${formatDate(
                new Date(2),
              )}`}</h2>
              <div>
                <label className="switch">
                  <input type="checkbox" />
                  <span>
                    {/* <em></em> */}
                    <strong></strong>
                  </span>
                </label>
              </div>
            </div>
            <div className="dtc v-mid tr">
              <h1 className="f6 f5-ns fw7 lh-title mv0">0/{curr.quantity}</h1>
              <h1 className="f6 f5-ns fw7 lh-title gray mv0">Free</h1>
              {/* <h2 className="f6 fw6 mt0 mb0 gray">Los Angeles</h2> */}
            </div>
            <div
              className="dtc v-mid tr white"
              onClick={() => {
                setToggleTicketCreation(true);
                setCurrentTicket(curr);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
              </svg>
            </div>
          </article>
        ))}
      </main>
      {!toggleTicketCreation && (
        <div
          onClick={() => setToggleTicketCreation(true)}
          className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 "
        >
          Create A Ticket{' '}
        </div>
      )}
      {toggleTicketCreation && (
        <div>
          <TicketCreationForm
            addTicket={addTicket}
            ticket={currentTicket}
            updateTicket={updateTicket}
          />{' '}
          <div
            onClick={() => {
              setToggleTicketCreation(false);
              setCurrentTicket(undefined);
            }}
            className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5"
          >
            Cancel
          </div>
        </div>
      )}
      <br />{' '}
      <div
        className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph4 f3 fw5"
        onClick={() => handleSubmit()}
      >
        Submit
      </div>
    </article>
  );
};
