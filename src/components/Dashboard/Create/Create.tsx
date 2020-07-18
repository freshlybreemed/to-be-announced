import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import {
  PlacesAutoComplete,
  TicketCreationForm,
  DateTimePicker,
  UploadFlyer,
  TextEditor,
  ArtistCreationForm,
} from '../';
import { TicketProps, EventProps, LineUpProps } from '../../../@types/types';
import {
  formatDate,
  formatPrice,
  validEndDate,
  validStartDate,
  timeConstraints,
} from '../../../lib';
import moment from 'moment-timezone';
import shortid from 'shortid';

interface EditProps {
  event?: EventProps;
}

export const Create: React.FunctionComponent<EditProps> = ({ event }) => {
  const [name, setName] = useState<string>(event ? event.name : '');
  const [location, setLocation] = useState<EventProps['location']>(
    event
      ? event.location
      : {
          venue: '',
          city: '',
          state: '',
          zip: '',
          address: '',
          placeId: '',
          lng: null,
          lat: null,
          timeZoneId: '',
        },
  );
  const [_id] = useState<string>(event ? event._id : shortid.generate());
  const [image, setImage] = useState<string>(event ? event.image : '');
  const [description, setDescription] = useState<string>(
    event ? event.description : '',
  );
  const [startDate, setStartDate] = useState<Date>(
    event
      ? moment.tz(event.startDate, event.location.timeZoneId).toDate()
      : null,
  );
  const [endDate, setEndDate] = useState<Date>(
    event ? moment.tz(event.endDate, event.location.timeZoneId).toDate() : null,
  );
  const [eventType] = useState<string>(event ? event.eventType : '');
  const [refunds, setRefundable] = useState<boolean>(
    event ? event.refunds : true,
  );
  const [slug, setSlug] = useState<string>(event ? event.slug : '');
  const [currentArtist, setCurrentArtist] = useState<LineUpProps>(null);
  const [currentTicket, setCurrentTicket] = useState<TicketProps>(null);
  const [toggleTicketCreation, setToggleTicketCreation] = useState<boolean>(
    false,
  );
  const [toggleLineUpCreation, setToggleLineUpCreation] = useState<boolean>(
    false,
  );
  const [ticketTypes, setTicketTypes] = useState<EventProps['ticketTypes']>(
    event ? event.ticketTypes : {},
  );
  const [lineUp, setLineUp] = useState<EventProps['lineUp']>(
    event ? event.lineUp : {},
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [eventErrors, setEventErrors] = useState<any>({
    name: false,
    location: '',
  });

  const addTicket = (ticket: TicketProps) => {
    const tickets = ticketTypes;
    ticket.enabled = true;
    ticket._id = Object.keys(ticketTypes).length;
    tickets[ticket._id] = ticket;
    setTicketTypes(tickets);
    setToggleTicketCreation(false);
  };
  const addArtist = (artist: LineUpProps) => {
    const artists = lineUp;
    artists[artist.igHandle] = artist;
    setLineUp(artists);
    setToggleLineUpCreation(false);
  };

  const updateArtist = (artist: LineUpProps) => {
    const artists = {
      ...lineUp,
      [artist.igHandle]: artist,
    };

    setLineUp(artists);
    setToggleLineUpCreation(false);
    setCurrentArtist(null);
  };
  const removeArtist = (artist: LineUpProps) => {
    const artists = {
      ...lineUp,
    };
    delete artists[artist.igHandle];

    setLineUp(artists);
    setToggleLineUpCreation(false);
    setCurrentArtist(null);
  };
  const updateTicket = (ticket: TicketProps) => {
    const tickets = {
      ...ticketTypes,
      [ticket._id]: ticket,
    };

    setTicketTypes(tickets);
    setToggleTicketCreation(false);
    setCurrentTicket(null);
  };
  const removeTicket = (ticket: TicketProps) => {
    const tickets = {
      ...ticketTypes,
    };
    delete tickets[ticket.ticketName];
    console.log(tickets);

    setTicketTypes(tickets);
    setToggleTicketCreation(false);
    setCurrentTicket(null);
  };

  const setEventLocation = (addy: EventProps['location']) => setLocation(addy);

  const eventDetails: EventProps = {
    name,
    slug,
    _id,
    location,
    description,
    eventType,
    organizerId: '123',
    image,
    lineUp,
    tickets: event ? event.tickets : [],
    startDate,
    endDate,
    gross: event ? event.gross : 0,
    password: event ? event.password : null,
    listed: event ? event.listed : true,
    publishDate: event ? event.publishDate : new Date().toString(),
    updatedAt: new Date().toString(),
    ticketTypes,
    refunds,
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
      .then(() => Router.push(`/dashboard/manage/${eventDetails._id}`));
  };

  const checkForErrors = (item) => {
    if (item.name.length === 0) {
      console.log('bro');
      setEventErrors({
        ...eventErrors,
        name: true,
      });
    } else {
      setEventErrors({
        ...eventErrors,
        name: false,
      });
    }
  };
  return (
    <article className="w-100 tc">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/draft-js/0.11.5/Draft.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/draftail@1.3.0/dist/draftail.css"
      />
      <div className="ph4 pb2 fw5 f1">{event ? `Edit` : `Create`} Event</div>

      <div className={'w-100 ph4 pt4 bg-white black'}>
        {/* <h1 className="f1-ns f2 mt0">{event ? `Edit` : `Create`} Event</h1> */}
        <div className="w-75-ns w-100 center">
          <div>
            <h1 className="tl fw7 mb0 pb3">Basic Info</h1>
            <p className="tl mt0 pt1 f6">
              Name your event and tell event-goers why they should come. Add
              details that highlight what makes it unique.
            </p>
            <div
              style={{ transition: 'background .24s cubic-bezier(.4,0,.3,1)' }}
              className={`mt3 mb2 tl ba-hover`}
            >
              <small className="db pl2 pt2 pb1 mid-gray ">
                Event Name <span className="red">*</span>
              </small>
              <input
                value={name}
                onChange={(event) => {
                  setName(event.currentTarget.value);
                  checkForErrors({ name: event.currentTarget.value });
                }}
                className="pl2 pb2  input-reset  bn w-90"
              />
            </div>

            {eventErrors.name && (
              <small className="db tl red">Title is required</small>
            )}
            <div className="mv2 tl ba-hover">
              <small className="mid-gray db pl2 pt2 pb1 ">Event Location</small>
              <PlacesAutoComplete
                event={event}
                location={location}
                setLocation={setEventLocation}
              />
            </div>
            <div className="mv3 tl ba-hover">
              <small className="mid-gray db pl2 pt2 pb1"> Start Time</small>
              <DateTimePicker
                start={true}
                timeZoneId={location.timeZoneId}
                isValidDate={validStartDate}
                date={startDate}
                setDate={setStartDate}
              />
            </div>
            <div className="mv3 tl ba-hover">
              <small className=" mid-gray  db pl2 pt2 pb1"> End Time</small>
              <DateTimePicker
                timeZoneId={location.timeZoneId}
                start={false}
                isValidDate={validEndDate(startDate)}
                date={endDate}
                timeConstraints={{
                  minutes: { step: 40, min: 0, max: 24 },
                  ...timeConstraints(startDate),
                }}
                setDate={setEndDate}
              />
            </div>
            <div className="mt3 mb5 tl ba-hover">
              <small className=" mid-gray db pl2 pt2 pb1"> Event URL</small>
              <input
                className="pl2 pb2 input-reset bn  w-90"
                value={slug}
                onChange={(e) => setSlug(e.currentTarget.value)}
              />
            </div>
            <hr className="o-20 " />
          </div>
          <div className="mv4 pv2">
            <h1 className="tl fw7 mb0 pb3">Event Image</h1>
            <div className="mb5">
              <img src={image} className="db w-100" />
              <UploadFlyer setImage={setImage} />
            </div>
            <hr className="o-20 " />
          </div>
          <div className="mv4 pv2">
            <h1 className="tl fw7 mb0 pb3">Ticket Details</h1>
            {!toggleTicketCreation && (
              <div>
                <div
                  onClick={() => setToggleTicketCreation(true)}
                  className="mt4 b--black hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f5 fw5"
                >
                  Create A Ticket
                </div>
                <div className="mt3">
                  <label className="pa2 mr3 gray">
                    Refundable?
                    <input
                      type="checkbox"
                      onChange={() => setRefundable(!refunds)}
                      checked={refunds}
                      disabled={event ? true : false}
                    />{' '}
                    <span>
                      <strong></strong>
                    </span>
                  </label>
                </div>
                <main className="w-75-ns w-100 tl center">
                  {Object.keys(ticketTypes).map((curr, key) => (
                    <article
                      key={key}
                      className={`dt w-100   ${classNames({
                        bt: key > 0,
                      })} b--gray pb2 mt2`}
                    >
                      <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw7 lh-title mv0 pb1 underline-hover">
                          <a className="black no-underline" href="">
                            {ticketTypes[curr].ticketName}
                          </a>
                        </h1>
                        <h2 className="f6 fw6 mt0 mb1 black">
                          {ticketTypes[curr].ticketEndDate !== null &&
                            `Ends ${formatDate(
                              new Date(ticketTypes[curr].ticketEndDate),
                            )}`}
                        </h2>
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
                          {formatPrice(ticketTypes[curr].price.toString())}
                        </h1>
                        {/* <h2 className="f6 fw6 mt0 mb0 gray">Los Angeles</h2> */}
                      </div>
                      <div
                        className="dtc v-mid tr black"
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
                  timeZoneId={location.timeZoneId}
                  ticket={currentTicket}
                  removeTicket={removeTicket}
                  updateTicket={updateTicket}
                />{' '}
                <div
                  onClick={() => {
                    setToggleTicketCreation(false);
                    setCurrentTicket(undefined);
                  }}
                  className="mt4 b--black hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5"
                >
                  Cancel
                </div>
              </div>
            )}
          </div>
          <hr className="o-20" />
          <div className="mv4 pv2">
            <h1 className="tl fw7 mb0 pb3">Event Description</h1>
            <div className="mv3 pv3 w-75-ns w-100 center">
              <TextEditor
                setDescription={setDescription}
                description={description}
              />
            </div>
          </div>
          <hr className="o-20" />
          <div className="mv4 pt2">
            <h1 className="tl fw7 mb0 pb3">Event Line Up</h1>
            {!toggleLineUpCreation && (
              <div>
                <div
                  onClick={() => setToggleLineUpCreation(true)}
                  className="mv4 b--black hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f5 fw5"
                >
                  Add Artist
                </div>
                <main className="w-75-ns w-100 tl center">
                  {Object.keys(lineUp).map((curr, key) => (
                    <article key={key} className="dt w-100 spb2 mt2">
                      <div className="db dtc-ns v-mid-ns">
                        <img
                          src={lineUp[curr].imageURL}
                          className="db w-100 w5-ns"
                        />
                      </div>
                      <div className="db dtc v-mid ph2 pr0-ns pl3-ns">
                        <p>
                          <strong> {lineUp[curr].artistName} </strong>
                          <a
                            className="no-underline black"
                            href={`https://instagram.com/${curr}`}
                            target="_blank"
                          >
                            {lineUp[curr].igHandle}
                          </a>
                          <br />
                        </p>
                      </div>
                    </article>
                  ))}
                </main>
              </div>
            )}
            {toggleLineUpCreation && (
              <div>
                <ArtistCreationForm
                  addArtist={addArtist}
                  artist={currentArtist}
                  removeArtist={removeArtist}
                  updateArtist={updateArtist}
                />
                <div
                  onClick={() => {
                    setToggleTicketCreation(false);
                    setCurrentTicket(undefined);
                  }}
                  className="mt4 b--black hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5"
                >
                  Cancel
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="mv4 b--black dib noselect br-100 b--solid pa2 ph4 f3 fw5"
          onClick={() => handleSubmit()}
        >
          {loading && <i className="fa fa-spinner fa-spin mr2" />}
          {loading
            ? event
              ? 'Updating...'
              : 'Submitting...'
            : event
            ? 'Update'
            : 'Submit'}
        </div>
      </div>
    </article>
  );
};
