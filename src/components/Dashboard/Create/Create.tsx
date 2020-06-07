import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { PlacesAutoComplete } from './PlacesAutoComplete';
import { TicketCreationForm } from './TicketCreationForm';
import { DateTimePicker } from './DateTimePicker';
import { UploadFlyer } from './UploadFlyer';
import { TicketProps, EventProps } from '../../../@types/types';
import {
  formatDate,
  formatPrice,
  validEndDate,
  validStartDate,
  timeConstraints,
} from '../../../lib';
import { Editor } from './TextEditor';
import moment from 'moment';

interface EditProps {
  event?: EventProps;
}
export const Create: React.FunctionComponent<EditProps> = ({ event }) => {
  const [name, setName] = useState<string>(event ? event.name : '');
  const [location, setLocation] = useState<object>(event ? event.location : {});
  const [image, setImage] = useState<string>(event ? event.image : '');
  const [description, setDescription] = useState<string>(
    event ? event.description : '',
  );
  const [startDate, setStartDate] = useState<string>(
    event ? moment(event.startDate).format('llll') : '',
  );
  const [endDate, setEndDate] = useState<string>(
    event ? moment(event.endDate).format('llll') : '',
  );
  const [eventType, setEventType] = useState<string>(
    event ? event.eventType : '',
  );
  const [slug, setSlug] = useState<string>(event ? event.slug : '');
  const [currentTicket, setCurrentTicket] = useState<TicketProps>(null);
  const [toggleTicketCreation, setToggleTicketCreation] = useState<boolean>(
    false,
  );
  const [ticketTypes, setTicketTypes] = useState<Object>(
    event ? event.ticketTypes : {},
  );
  const [loading, setLoading] = useState<boolean>(false);

  const addTicket = (ticket: TicketProps) => {
    const tickets = ticketTypes;
    ticket.enabled = true;
    ticket._id = Object.keys(ticketTypes).length;
    tickets[ticket.ticketName] = ticket;
    setTicketTypes(tickets);
    setToggleTicketCreation(false);
  };

  const updateTicket = (ticket: TicketProps) => {
    const tickets = {
      ...ticketTypes,
      [ticket.ticketName]: ticket,
    };

    setTicketTypes(tickets);
    setToggleTicketCreation(false);
    setCurrentTicket(null);
  };

  const setEventLocation = (addy: object) => setLocation(addy);

  const eventDetails = {
    name,
    slug,
    location,
    description,
    eventType,
    image,
    tickets: event ? event.tickets : [],
    startDate,
    gross: event ? event.gross : 0,
    endDate,
    ticketTypes,
  };

  console.log(eventDetails);

  const handleSubmit = async () => {
    setLoading(true);
    const organizerId = '123';
    return await axios
      .post('/api/event', { ...eventDetails, organizerId })
      .catch((res) => {
        setLoading(false);
        console.error(res.data);
      })
      .then(() => Router.push(`/dashboard/manage/${eventDetails.slug}`));
  };

  return (
    <article className="w-100  ph3-m ph3-l tc">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/draft-js/0.11.5/Draft.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/draftail@1.3.0/dist/draftail.css"
      />
      <h1 className="f1-ns f2 mt0">{event ? `Edit` : `Create`} Event</h1>
      <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Select Event Type</h2>
      <div className=" pt4 mb4">
        {(eventType === '' || eventType === 'venue') && (
          <div className="dib mr3">
            <span
              className=" b--white hover-bg-white center hover-black  noselect br-100 b--solid pa2 ph4-ns ph3 f4-ns f6 fw5  "
              onClick={() => setEventType('venue')}
            >
              Venue
            </span>
          </div>
        )}
        {(eventType === '' || eventType === 'online') && (
          <div className="dib">
            <span
              className=" b--white hover-bg-white center hover-black  noselect br-100 b--solid pa2 ph4-ns ph3 f4-ns f6 fw5 white"
              onClick={() => setEventType('online')}
            >
              Online Event
            </span>
          </div>
        )}
      </div>
      <hr className="o-20 mt4" />
      <div className="w-75-ns w-100 center">
        <div className="mv3">
          <label className="f5-ns f6 fw7-ns fw5 db tl">
            Enter Event Details
          </label>
          <input
            value={name}
            onChange={(event) => {
              setName(event.currentTarget.value);
            }}
            className="pa2 bt-0 br-0 bl-0 bb input-reset bb bg-black white w-100"
          />
        </div>
        <div className="mv3 ">
          <label className="f5-ns f6 fw7-ns fw5 db tl">
            Enter Event Location
          </label>
          <PlacesAutoComplete
            location={location}
            setLocation={setEventLocation}
          />
        </div>
        <label className="f5-ns f6 fw7-ns fw5 db tl">Enter Start Time</label>
        <DateTimePicker
          start={true}
          isValidDate={validStartDate}
          date={startDate}
          setDate={setStartDate}
        />
        <div className="mv3">
          <label className="f5-ns f6 fw7-ns fw5 db tl">Enter End Time</label>
          <DateTimePicker
            start={false}
            isValidDate={validEndDate(new Date(startDate))}
            date={endDate}
            timeConstraints={{
              minutes: { step: 40, min: 0, max: 24 },
              ...timeConstraints(new Date(startDate)),
            }}
            setDate={setEndDate}
          />
        </div>
        <div className="mt3">
          <label className="f5-ns f6 fw7-ns fw5 db tl">Enter Event URL</label>
          <input
            className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mb3  w-100"
            value={slug}
            onChange={(e) => setSlug(e.currentTarget.value)}
          />
        </div>
        <div className="mb3">
          <img src={image} className="db" />
          <UploadFlyer setImage={setImage} />
        </div>
      </div>
      <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Enter Ticket Details</h2>
      {!toggleTicketCreation && (
        <div>
          <div
            onClick={() => setToggleTicketCreation(true)}
            className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5 mr3 "
          >
            Create A Ticket{' '}
          </div>{' '}
          <main className="w-75 tl center">
            {Object.keys(ticketTypes).map((curr) => (
              <article className="dt w-100 bb b--gray pb2 mt2">
                <div className="dtc v-mid pl3">
                  <h1 className="f6 f5-ns fw7 lh-title mv0 pb1 underline-hover">
                    <a className="white no-underline" href="">
                      {ticketTypes[curr].ticketName}
                    </a>
                  </h1>
                  <h2 className="f6 fw6 mt0 mb1 gray">{`Ends ${formatDate(
                    new Date(2),
                  )}`}</h2>
                  <div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onChange={() =>
                          updateTicket({
                            ...ticketTypes[curr],
                            enabled: !ticketTypes[curr].enabled,
                          })
                        }
                        checked={ticketTypes[curr].enabled}
                      />
                      <span>
                        {/* <em></em> */}
                        <strong></strong>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="dtc v-mid tr">
                  <h1 className="f6 f5-ns fw7 lh-title mv0">
                    {ticketTypes[curr].sold}/{ticketTypes[curr].quantity}
                  </h1>
                  <h1 className="f6 f5-ns fw7 lh-title gray mv0">
                    {formatPrice(ticketTypes[curr].price)}
                  </h1>
                  {/* <h2 className="f6 fw6 mt0 mb0 gray">Los Angeles</h2> */}
                </div>
                <div
                  className="dtc v-mid tr white"
                  onClick={() => {
                    setToggleTicketCreation(true);
                    setCurrentTicket(ticketTypes[curr]);
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
        </div>
      )}
      {toggleTicketCreation && (
        <div>
          <TicketCreationForm
            addTicket={addTicket}
            startDate={startDate}
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
      <br /> <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Enter Event Description</h2>
      <div className="mv3 pv3 w-75-ns w-100 center">
        <Editor setDescription={setDescription} description={description} />
      </div>
      <div
        className="mt4 b--white dib noselect br-100 b--solid pa2 ph4 f3 fw5"
        onClick={() => handleSubmit()}
      >
        {loading && <i className="fa fa-spinner fa-spin mr2" />}
        {loading ? 'Submitting...' : 'Submit'}
      </div>
    </article>
  );
};
